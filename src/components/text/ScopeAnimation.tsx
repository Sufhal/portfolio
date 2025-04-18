import React, { RefObject, LegacyRef, useContext, useEffect, useRef } from 'react';
import scss from '#/components/text/text.module.scss';
import useMutation from '#/hooks/useMutation';
import IntersectionAnimations from '#/classes/IntersectionAnimations';

export default function ScopeAnimation(props: React.PropsWithChildren<ScopeAnimationProps>) {


	function triggerTest(mutations: MutationRecord[]) {
		for (const mutation of mutations) {
			if (mutation.type === 'attributes' && 
				mutation.attributeName === 'class'
			)
				return true;
		}
		return false;
	}

	function visibleTest(element: HTMLDivElement) {
		return (element instanceof HTMLElement) && element.classList.contains('is-inview');
	}
	
	const [ ref, isVisible ] = useMutation<HTMLDivElement>(triggerTest, visibleTest, {
		attributes: true
	});

	useEffect(() => {
		if (ref && ref.current)
			IntersectionAnimations.setElementView(ref.current, props.isVisible ? props.isVisible : isVisible);
	}, [isVisible, props.isVisible]);

	return (
		<>
			<span 
				className={scss.transitionContainer} 
				data-animate-container
				data-scroll 
				data-scroll-repeat 
				data-scroll-offset='15%, 20%'
				ref={ref}
			>
				{props.children}
			</span>
		</>
	)
}

export interface ScopeAnimationProps {
	isVisible?: boolean;
}