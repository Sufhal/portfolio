import React, { useEffect, useContext } from 'react';
import { SmoothScrollContext } from '#/contexts/SmoothScroll.context';
import Animations from "#/classes/Animations";
import IntersectionAnimations from '#/classes/IntersectionAnimations';
import { Clock } from 'three';
import { OnScrollEvent } from 'locomotive-scroll';

export default function ScrollAnimation(props: React.PropsWithChildren) {

	const { scroll } = useContext(SmoothScrollContext);

	function onScroll(e: OnScrollEvent) {
		if (!scroll) return;
		// @ts-ignore
		Animations.onScroll(e.scroll.y + scroll.scroll.windowMiddle.y);
	}

	useEffect(() => {
		if (!scroll) return;
		scroll.on('scroll', onScroll);
		return () => {
			// @ts-ignore
			scroll.off('scroll', onScroll);
		}
	}, [scroll]);

	useEffect(() => {
		const clock = new Clock();
		function tick() {
			requestAnimationFrame(tick);
			IntersectionAnimations.update(clock.getDelta());
		}
		tick();
		return () => {
			clock.stop();
		};
	}, []);


	return (
		<>
			{props.children}
		</>
	)
}