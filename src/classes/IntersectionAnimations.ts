import Easings from './Easings';
import Utils from './Utils';

export default class IntersectionAnimations {

	private static readonly _STAGGER_DELAY_IN_SECOND = .035;
	private static readonly _DATASET_NAME = 'data-animate';
	private static readonly _ANIMATION_CLASS_NAME = 'in-view-animation';

	private static _elapsedTime: number = 0;
	private static _animations: Map<HTMLElement, AnimationsToApply> = new Map();

	public static update(delta: number) {
		this._elapsedTime += delta;
		this._applyAnimations();
	}

	public static setElementView(element: HTMLElement, isVisible: boolean) {
		if (!isVisible) {

		} 
		else {
			this._animations.set(element, this._scheduleAnimations(element));
		}
	}

	public static restartScheduledAnimation() {
		for (const [ element ] of this._animations) {
			this._animations.set(element, this._scheduleAnimations(element));
		}
	}


	/* PRIVATE METHODS */

	private static _scheduleAnimations(element: HTMLElement): AnimationsToApply {
		const elements = element.querySelectorAll<HTMLElement>(`[${this._DATASET_NAME}="true"]`);
		const animationsScheduled: Set<ElementAnimationSchedule> = new Set();
		Array.from(elements).forEach((el, i) => {
			animationsScheduled.add({
				element: el,
				startTime: this._elapsedTime + (i * (i * 0.25)  * (this._STAGGER_DELAY_IN_SECOND))
			});
		});
		return {
			root: element,
			animationsScheduled
		};
	}

	private static _applyAnimations() {
		for (const [ element, animations ] of this._animations) {
			for (const scheduledAnimation of animations.animationsScheduled) {
				if (this._elapsedTime >= scheduledAnimation.startTime) {
					scheduledAnimation.element.classList.add(this._ANIMATION_CLASS_NAME);
					animations.animationsScheduled.delete(scheduledAnimation);
				}
			}
			// if (animations.animationsScheduled.size === 0) {
			// 	this._animations.delete(element);
			// }
		}
		return;
		// for (const [ group, map ] of this._animations) {
		// 	for (const [ el, animation ] of map) {
		// 		const factor = animation.easing(
		// 			Utils.normalizeValueBetween(
		// 				this._elapsedTime, 
		// 				animation.animationStart, 
		// 				animation.animationEnd
		// 			)
		// 		);
		// 		const value = Utils.denormalizeValueBetween(
		// 			factor,
		// 			animation.translateY.from,
		// 			animation.translateY.to
		// 		);
		// 		el.style.setProperty('transform', `translateY(${value}%)`)
		// 	}
		// }
	}

}

export interface AnimationsToApply {
	root: HTMLElement;
	animationsScheduled: Set<ElementAnimationSchedule>;
}

export interface ElementAnimationSchedule {
	element: HTMLElement;
	startTime: number;
}