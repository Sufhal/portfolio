export default class Analytics {

	public static onExternalLinkClick(textContent: string, href: string) {
		this._sendEvent('external_link_click', { textContent, href });
	}

	private static _sendEvent(eventName: string, details?: EventDetails) {
		gtag('event', eventName, details);
	}

}

declare global {
	const gtag: (
		type: 'event', 
		eventName: string, 
		details?: EventDetails
	) => void
}

export type EventDetails = {[index: string]: any};
