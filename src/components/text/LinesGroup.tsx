import React, { useContext, useEffect, useRef, useState } from "react";
import LineSplitter from '#/classes/LineSplitter';
import useDebounce from '#/hooks/useDebounce';
import { SmoothScrollContext } from '#/contexts/SmoothScroll.context';
import TextAnimation from './ScopeAnimation';
import IntersectionAnimations from '#/classes/IntersectionAnimations';

export default function LinesGroup(props: React.PropsWithChildren) {

	const ref = useRef<HTMLParagraphElement>(null);
	const [ lines, setLines ] = useState<string[] | null>(null);
	const [ windowDimensions, setWindowDimensions ] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	});
	const debouncedWidth = useDebounce<number>(windowDimensions.width, 500);
	const { scroll } = useContext(SmoothScrollContext);

	useEffect(() => {
		function onResize() {
			setWindowDimensions({
				height: window.innerHeight,
				width: window.innerWidth
			});
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	useEffect(() => {
		if (ref && ref.current) {
			setLines(LineSplitter.split(ref.current));
		}
	}, [ref, debouncedWidth]);

	useEffect(() => {
		if (scroll && lines) {
			scroll.update();
			IntersectionAnimations.restartScheduledAnimation();
		}
	}, [lines, scroll]);

	return (
		<span data-line-group ref={ref}>
			{ lines === null && props.children}
			{ Array.isArray(lines) && lines.map((line, i) => <span 
					key={i + line} 
					data-line
					data-animate
				>
					{line}
				</span>
			)}
		</span>
	);
}