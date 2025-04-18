import { useEffect, useRef } from 'react';

export default function useAnimationFrame(nextAnimationFrameHandler: () => void, shouldAnimate = true) {
	const frame = useRef(0);

	const animate = () => {
		nextAnimationFrameHandler();
		frame.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		if (shouldAnimate) {
			frame.current = requestAnimationFrame(animate);
		} else {
			cancelAnimationFrame(frame.current);
		}

		return () => cancelAnimationFrame(frame.current);
	}, [shouldAnimate]);
};