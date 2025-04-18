import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';

export default function useIntersection<T extends HTMLElement>(options?: IntersectionObserverInit): [RefObject<T> | LegacyRef<T>, boolean] {

	const containerRef = useRef<T>(null);
	const [ isVisible, setIsVisible ] = useState(false);

	function onIntersection(entries: IntersectionObserverEntry[]) {
		const [ entry ] = entries;
		setIsVisible(entry.isIntersecting);
	}

	useEffect(() => {
		const observer = new IntersectionObserver(onIntersection, options);
		if (containerRef.current)
			observer.observe(containerRef.current);
		
		return () => {
			if (containerRef.current)
				observer.unobserve(containerRef.current);
		}
	}, [containerRef, options]);

	return [containerRef, isVisible];

}