import React from "react";
import Link from "next/link";
import scss from './buttons.module.scss';
import Analytics from '#/classes/Analytics';

function getTextContentOfReactNode(el: unknown): string {
	if (typeof el === 'string') 
		return el;
	if (el instanceof HTMLElement)
		el.textContent;
	return '';
}

export default function LargeLink(props: React.PropsWithChildren<LargeLinkProps>) {

	function isExternal(href: string) {
		return href.startsWith('https://');
	}

	const isPropsHrefExternal = isExternal(props.href);

	function onClick(e: React.MouseEvent) {
		if (props.onClick) props.onClick(e);
		if (!isPropsHrefExternal) return;
		const textContent = props.children 
			? getTextContentOfReactNode(props.children) 
			: 'unknown';
		Analytics.onExternalLinkClick(textContent, props.href);
	}

	return (
		<>
			<Link 
				onClick={onClick} 
				href={props.href} 
				className={scss.largeLink} 
				target={isPropsHrefExternal ? '_blank' : '_self'}
				data-animate
			>
				{props.children}
				{isPropsHrefExternal &&
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="7" y1="17" x2="17" y2="7"></line>
						<polyline points="7 7 17 7 17 17"></polyline>
					</svg>
				}
			</Link>
		</>
	)
}

export interface LargeLinkProps {
	href: string;
	type?: 'external';
	onClick?: (e: React.MouseEvent) => void;
}