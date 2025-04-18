import {MathUtils, Vector3} from "three";
import WankelScene from "#/classes/WankelScene";
import WankelModel from "#/classes/WankelModel";
import Easing from "#/classes/Easings";
import Utils from './Utils';
import Easings from '#/classes/Easings';

/**
 * @deprecated
 */
export default class WankelController {

	private static _stageEasingConfig = {
		cameraPosition: Easing.easeInOutQuad,
		orbitTarget: Easing.easeInOutQuad,
		engineSpeed: Easing.easeInOutExpo,
		shakeStrength: Easing.easeInOutExpo,
		splitFactor: Easing.easeInOutCubic,
		light: Easing.easeInOutQuad
	}

	private static _introStage: Stage = {
		cameraPosition: new Vector3(0, -26.412461089816528, 217.541258941833523),
		orbitTarget: new Vector3(0, 0, 0),
		isLocked: false,
		engineSpeed: 2,
		splitFactor: 0,
		shakeStrength: 0,
		light: 2
	};
	//
	private static _stages: Stage[] = [];
	private static _previousStage: Stage | undefined = undefined;
	private static _previousStageBeforeTransition: Stage | undefined = undefined;
	private static _usePreviousStageAsStageZero: boolean = false;
	private static _transitionRequest: {
		requestTime: number;
		requestEndTime: number;
	} | undefined = undefined;

	public static get transitionRequested() {
		return !!this._transitionRequest;
	}

	public static get usePreviousStageAsStageZero() {
		return this._usePreviousStageAsStageZero;
	}

	public static get stages() {
		return this._stages;
	}

	public static createStage(idx: number, stage: Stage) {
		this._stages[idx] = stage;
	}

	public static removeStage(idx: number) {
		this._stages.splice(idx, 1);
		// delete this._stages[idx];
	}

	public static mixStages(previous: number, next: number, factor: number) {
		const previousStage = this._usePreviousStageAsStageZero && this._previousStageBeforeTransition
			? this._previousStageBeforeTransition
			: this._stages[previous];
		const nextStage = this._stages[next];
		const intermediateStage = this._computeIntermediateStage(previousStage, nextStage, factor);
		this._applyIntermediateStage(intermediateStage);
	}

	public static setStage(idx: number) {
		if (!this._stages[idx]) {
			return;
		}
		this._previousStage = this._stages[idx];
		this._applyIntermediateStage(this._stages[idx]);
	}

	public static update(delta: number) {
		if (!this._transitionRequest || !this._stages[0]) return;
		if (this._transitionRequest.requestEndTime < WankelScene.elapsedTime || !this._previousStageBeforeTransition) {
			this._transitionRequest = undefined;
			this._previousStage = this._stages[0];
			return;
		}
		const factor = Utils.normalizeValueBetween(WankelScene.elapsedTime, this._transitionRequest.requestTime, this._transitionRequest.requestEndTime);
		const intermediateStage = this._computeIntermediateStage(this._previousStageBeforeTransition, this._stages[0], Easings.easeInOutQuad(factor));
		this._applyIntermediateStage(intermediateStage);
	}

	public static enableLastStageTransition(duration: number) {
		this._previousStageBeforeTransition = this._previousStage;
		this._transitionRequest = {
			requestTime: WankelScene.elapsedTime,
			requestEndTime: WankelScene.elapsedTime + duration
		};
	}

	public static disableLastStageTransition() {
		this._transitionRequest = undefined;
		this._previousStageBeforeTransition = this._previousStage;
		this._usePreviousStageAsStageZero = true;
	}

	public static disableUsePreviousStageAsStageZero() {
		this._usePreviousStageAsStageZero = false;
	}

	public static getLastStageIndex() {
		return this._stages.length - 1;
		// return this._stages.reduce((accumulator, current) => {
		// 	if (current)
		// 		accumulator++;
		// 	return accumulator;
		// }, -1);
	}


	/* PRIVATE METHODS */

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
		this._previousStage = intermediateStage;
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

export interface Stage {
	cameraPosition: Vector3;
	orbitTarget: Vector3;
	isLocked: boolean;
	splitFactor: number;
	engineSpeed: number;
	shakeStrength: number;
	light: number;
	opacity?: number;
}