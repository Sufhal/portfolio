import { PropsWithChildren } from 'react';
import scss from './list.module.scss';

export default function NativeListEntry(props: PropsWithChildren) {
	return (
		<li 
			className={scss.entry}
			data-animate
		>
			{props.children}
		</li>
	)
}