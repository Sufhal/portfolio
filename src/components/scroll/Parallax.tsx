import { PropsWithChildren } from 'react';

export default function Parallax(props: PropsWithChildren) {
	return (
		<div data-scroll data-scroll-speed='-3'>
			{props.children}
		</div>
	)
}