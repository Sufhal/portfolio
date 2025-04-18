import LocomotiveScroll from 'locomotive-scroll';
import { Stage } from './WankelController';

export default class Sector {

	public stage: Stage;
	private _index: number;
	private _ref: HTMLElement;
	private _middle: number;

	constructor(index: number, ref: HTMLElement, stage: Stage, options?: SectorOptions) {
		this.stage = stage;
		this._index = index;
		this._ref = ref;
		this._middle = options
			? this._getAbsoluteMiddleUsingOptions(options)
			: this._getAbsoluteMiddle();
	}


	/* PUBLIC METHODS */

	public get middle() {
		return this._middle;
	}


	/* PRIVATE METHODS */

	private _getAbsoluteMiddle() {
		const bcr = this._ref.getBoundingClientRect();
		return bcr.y + (bcr.height / 2);
	}

	private _getAbsoluteMiddleUsingOptions(options: SectorOptions) {
		const scroll = (options.scroll as any).scroll as ScrollDetails;
		switch (options.sectorType) {
			case 'first':
				return scroll.windowMiddle.y;
			case 'last':
			default:
				return scroll.instance.limit.y + scroll.windowMiddle.y;
		}
	}

}

export interface SectorOptions {
	scroll: LocomotiveScroll;
	sectorType: 'first' | 'last';
}

export interface ScrollDetails {
	windowMiddle: {
		x: number;
		y: number;
	};
	windowHeight: number;
	instance: {
		limit: {
			x: number;
			y: number;
		}
	};

}