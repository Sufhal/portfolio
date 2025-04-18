import LocomotiveScroll from 'locomotive-scroll';
import React, { createContext, useEffect, useState } from 'react';

export const SmoothScrollContext = React.createContext<{ scroll: LocomotiveScroll | null }>({
	scroll: null,
});

export function SmoothScrollProvider(props: React.PropsWithChildren<{ options: LocomotiveScroll.InstanceOptions }>) {

  	const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

	useEffect(() => {
		if (!scroll) {
			;(async () => {
				try {
					const LocomotiveScroll = (await import('locomotive-scroll')).default
					const scroll = new LocomotiveScroll({
						el: document.querySelector<HTMLElement>('[data-scroll-container]') ?? undefined,
						...props.options,
					});
					setScroll(scroll);
				} catch (error) {
					throw Error(`[SmoothScrollProvider]: ${error}`)
				}
			})();
		}

		return () => {
			scroll && scroll.destroy();
		};
	}, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  	return (
		<SmoothScrollContext.Provider value={{ scroll }}>
			{props.children}
		</SmoothScrollContext.Provider>
	);
}

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
