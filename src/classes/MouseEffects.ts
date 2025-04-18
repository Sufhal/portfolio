export default class MouseEffects {


	/* PUBLIC METHODS */

	public static listenEvents() {
		document.addEventListener('mousemove', this._onMouseMove);
	}

	public static dispose() {
		document.removeEventListener('mousemove', this._onMouseMove);
	}


	/* PRIVATE METHODS */

	private static _onMouseMove(e: MouseEvent) {
		for (const card of document.querySelectorAll<HTMLDivElement>('[data-card]')) {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
		}
	}
}