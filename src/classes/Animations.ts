import { Stage } from "#/classes/WankelController";
import Sector, { SectorOptions } from "#/classes/Sector";
import Easings from "#/classes/Easings";
import WankelScene from './WankelScene';
import LocomotiveScroll from 'locomotive-scroll';
import WankelControllerBis from './WankelControllerBis';
import { Vector3 } from 'three';

export default class Animations {

	private static _elapsedTime: number = 0;
	private static _sectors: Sector[] = [];
	private static _lastScrollMiddle: number = 0;
	private static _lastNextSectorIdx: number = 0;
	private static _lastPage: string;

	/* PUBLIC METHODS */

	public static update(delta: number) {
		this._elapsedTime += delta;
	}

	public static setSector(idx: number, ref: HTMLElement, stage: Stage, scroll: LocomotiveScroll) {
		let sectorOptions: SectorOptions | undefined;
		if (idx === Infinity) {
			idx = this._sectors.length;
			sectorOptions = { sectorType: 'last', scroll };
		}
		else if (idx === 0) {
			sectorOptions = { sectorType: 'first', scroll };
		}
		this._sectors[idx] = new Sector(idx, ref, stage, sectorOptions);
	}

	public static unsetSector(idx: number) {
		if (idx === Infinity)
			idx = this._sectors.length - 1;
		this._sectors.splice(idx, 1);
	}

	public static onModelLoaded() {
		const sectorZero = this._sectors[0];
		if (!sectorZero) return;
		WankelControllerBis.setState('entry', {
			cameraPosition: new Vector3(-8.242071068669517, -17.53520826871079, 16.37784824738906),
			orbitTarget: new Vector3(-3.2563354329155203, 1.7457920603487747, 2.7255035935858825),
			isLocked: false,
			engineSpeed: 0,
			splitFactor: 0,
			shakeStrength: 0,
			light: 1,
			opacity: 0
		}, sectorZero.stage);
	}

	public static onPageTransition() {
		if (document.location.href === this._lastPage) return;
		this._lastPage = document.location.href;
		const sectorZero = this._sectors[0];
		if (!sectorZero) return;
		WankelControllerBis.setState('page-transition', undefined, sectorZero.stage, true);
	}

	public static onScroll(scrollMiddle: number) {
		if (this._lastScrollMiddle === scrollMiddle || !WankelScene.isInitialized) return;
		this._lastScrollMiddle = scrollMiddle;
		const previousSectorIdx = this._getNearestPreviousSectorIdx(scrollMiddle);
		const previousSector = this._sectors[previousSectorIdx];
		const nextSectorIdx = this._getNearestNextSectorIdx(scrollMiddle);
		if (nextSectorIdx !== this._lastNextSectorIdx)
			this._onNextSectorChange(nextSectorIdx);
		this._lastNextSectorIdx = nextSectorIdx;
		const nextSector = this._sectors[nextSectorIdx];
		if (!previousSector || !nextSector || previousSectorIdx === nextSectorIdx) return;
		const factor = (scrollMiddle - previousSector.middle) / (nextSector.middle - previousSector.middle);
		WankelControllerBis.setState('scroll', undefined, nextSector.stage);
		WankelControllerBis.setFactor(factor);
	}


	/* PRIVATE METHODS */

	private static _onNextSectorChange(newSectorIdx: number) {
		if (newSectorIdx === 0) return;
		WankelControllerBis.setStageFrom(this._sectors[newSectorIdx-1].stage);
		WankelControllerBis.setStageTo(this._sectors[newSectorIdx].stage);
	}

	private static _getNearestPreviousSectorIdx(scrollMiddle: number): number {
		const sectors = Array.from(this._sectors.entries());
		let nearestIdx = 0;
		for (const [idx, sector] of sectors) {
			const currentSectorDiff = scrollMiddle - sector.middle;
			if (currentSectorDiff < 0) continue;
			const currentNearestDiff = scrollMiddle - sectors[nearestIdx][1].middle;
			if (currentSectorDiff < currentNearestDiff) {
				nearestIdx = idx;
			}
		}
		return nearestIdx;
	}

	private static _getNearestNextSectorIdx(scrollMiddle: number): number {
		const sectors = Array.from(this._sectors.entries());
		let nearestIdx = sectors.length - 1;
		for (const [idx, sector] of sectors) {
			const currentSectorDiff = sector.middle - scrollMiddle;
			if (currentSectorDiff < 0) continue;
			const currentNearestDiff = sectors[nearestIdx][1].middle - scrollMiddle;
			if (currentSectorDiff < currentNearestDiff) {
				nearestIdx = idx;
			}
		}
		return nearestIdx;
	}

}