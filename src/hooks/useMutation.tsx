import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';

export default function useMutation<T extends HTMLElement>(triggerTest: TestTrigger, stateTest: StateTest<T>, options: MutationObserverInit): [RefObject<T>, boolean] {

	const containerRef = useRef<T>(null);
	const [ state, setState ] = useState(false);

	function onMutate(mutations: MutationRecord[]) {
		const shouldTriggerStateTest = triggerTest(mutations);
		if (shouldTriggerStateTest && containerRef.current) {
			setState(stateTest(containerRef.current))
		}
	}

	useEffect(() => {
		const observer = new MutationObserver(onMutate);
		if (containerRef.current)
			observer.observe(containerRef.current, options);
		return () => {
			if (containerRef.current)
				observer.disconnect();
		}
	}, [containerRef]);

	return [containerRef, state];

}

export type StateTest<T> = (el: T) => boolean;
export type TestTrigger = (mutations: MutationRecord[]) => boolean;