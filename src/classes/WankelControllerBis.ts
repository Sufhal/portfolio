import Utils from './Utils';
import { Stage } from './WankelController';
import {Light, MathUtils, Vector3} from "three";
import WankelScene from "#/classes/WankelScene";
import WankelModel from "#/classes/WankelModel";
import Easing from '#/classes/Easings';
import Easings from '#/classes/Easings';

export default class WankelControllerBis {

	private static _from: Stage | undefined;
	private static _current: Stage | undefined;
	private static _to: Stage | undefined;
	private static _factor: number | undefined;

	private static _state: WankelAnimationState = 'loading';
	private static _player: {
		animationStart: number
		animationEnd: number
	} | undefined;

	private static _stageEasingConfig = {
		cameraPosition: Easing.easeInOutQuad,
		orbitTarget: Easing.easeInOutQuad,
		engineSpeed: Easing.easeInOutExpo,
		shakeStrength: Easing.easeInOutExpo,
		splitFactor: Easing.easeInOutCubic,
		light: Easing.easeInOutQuad,
		opacity: Easing.easeInOutCubic
	}

	private static _needsUpdate = true;

	public static get state() {
		return this._state;
	}

	/**
	 * __Used to animate__
	 * - initial state from `loading` to `appear`
	 * - transition between pages
	 */
	public static update(time: number) {
		if (this._player) {
			// animation could be ended
			if (time > this._player.animationEnd) {
				if (this._state === 'entry') {
					this.setState('entry-ended');
				}
				this._disablePlayer();
			} 
			// otherwise, compute factor
			else {
				this.setFactor(
					Easings.easeInOutSine(
						Utils.normalizeValueBetween(time, this._player.animationStart, this._player.animationEnd)
					)
				);
			}
		}
		// if something is missing before computation, just cancel the frame
		if (!this._from || !this._to || !this._factor || !this._needsUpdate) return;
		// otherwise everything is fine and we can compute and apply intermediate stage
		const intermediateStage = this._computeIntermediateStage(this._from, this._to, this._factor);
		this._applyIntermediateStage(intermediateStage);
		this._current = intermediateStage;
		this._needsUpdate = false;
	}

	/**
	 * Used to change the animation state machine
	 * @returns {boolean} if the state is applied
	 */
	public static setState(incomingState: 'entry', stageFrom: Stage, stageTo: Stage): boolean
	public static setState(incomingState: 'entry-ended'): boolean
	public static setState(incomingState: 'page-transition', stageFrom: undefined, stageTo: Stage, forceReentry: true): boolean
	public static setState(incomingState: 'scroll', stageFrom: undefined, stageTo: Stage): boolean
	public static setState(incomingState: WankelAnimationState, stageFrom?: Stage, stageTo?: Stage, forceReentry?: boolean): boolean {
		if (incomingState === this._state && !forceReentry) return true;
		// no state is supposed to be applied before entry phase so we must return
		if (this._state === 'loading' && incomingState !== 'entry') return false;
		// no state is supposed to be applied before entry-ended state is applied so we must return
		if (this._state === 'entry' && incomingState !== 'entry-ended') return false;
		// wankel model has finished loading, apply entry animation, we can assume that previous state was `loading`
		if (incomingState === 'entry') {
			// debugger;
			const now = Date.now();
			this._player = {
				animationStart: now,
				animationEnd: now + 2000
			};
			this._from = stageFrom;
			this._to = stageTo;
		}
		// user has changed page
		else if (incomingState === 'page-transition') {
			const now = Date.now();
			this._player = {
				animationStart: now,
				animationEnd: now + 2000
			};
			this._from = this._current;
			this._to = stageTo;
		}
		// user has scrolled
		else if (incomingState === 'scroll') {
			this._from = this._current;
			this._to = stageTo;
		}		
		// this.debug();
		this._state = incomingState;
		this._needsUpdate = true;
		return true;
	}

	public static setStageFrom(stage: Stage) {
		if (this._player && this._state === 'entry') {
			this._from = this._current;
			this._disablePlayer();
		} else {
			this._from = stage;
		}
		this._needsUpdate = true;
	}

	public static setStageTo(stage: Stage) {
		this._to = stage;
		this._disablePlayer();
		this._needsUpdate = true;
	}

	public static setFactor(factor: number) {
		this._factor = factor;
		this._needsUpdate = true;
	}

	public static debug() {
		console.debug('debug', this._state, this._factor, this._from, this._current, this._to);
	}


	/* PRIVATE METHODS */

	private static _disablePlayer() {
		this._player = undefined;
		if (this._state === 'entry') {
			this._state = 'entry-ended';
		}
	}

	private static _computeIntermediateStage(previousStage: Stage, nextStage: Stage, factor: number): Stage {
		return {
			cameraPosition: new Vector3().lerpVectors(previousStage.cameraPosition, nextStage.cameraPosition, this._stageEasingConfig.cameraPosition(factor)),
			orbitTarget: new Vector3().lerpVectors(previousStage.orbitTarget, nextStage.orbitTarget, this._stageEasingConfig.orbitTarget(factor)),
			isLocked: previousStage.isLocked,
			splitFactor: MathUtils.lerp(previousStage.splitFactor, nextStage.splitFactor, this._stageEasingConfig.splitFactor(factor)),
			engineSpeed: MathUtils.lerp(previousStage.engineSpeed, nextStage.engineSpeed, this._stageEasingConfig.engineSpeed(factor)),
			shakeStrength: MathUtils.lerp(previousStage.shakeStrength, nextStage.shakeStrength, this._stageEasingConfig.shakeStrength(factor)),
			light: MathUtils.lerp(previousStage.light, nextStage.light, this._stageEasingConfig.light(factor)),
			opacity: MathUtils.lerp(
				previousStage.opacity !== undefined ? previousStage.opacity : 1, 
				nextStage.opacity !== undefined ? nextStage.opacity : 1, 
				this._stageEasingConfig.light(factor)
			)
		};
	}

	private static _applyIntermediateStage(intermediateStage: Stage) {
		WankelScene.camera.position.copy(intermediateStage.cameraPosition);
		WankelScene.orbit.target.copy(intermediateStage.orbitTarget);
		WankelScene.orbit.enabled = !intermediateStage.isLocked;
		WankelScene.directionalLight.intensity = intermediateStage.light;
		WankelScene.domElement.style.setProperty('opacity', String(intermediateStage.opacity !== undefined ? intermediateStage.opacity : 1));
		WankelModel.setEngineSpeed(intermediateStage.engineSpeed);
		WankelModel.setSplitFactor(intermediateStage.splitFactor);
		WankelModel.setShake(intermediateStage.shakeStrength);
	}
}

export type WankelAnimationState = 'loading' | 'entry' | 'entry-ended' | 'scroll' | 'page-transition'