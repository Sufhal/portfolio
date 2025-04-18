import { PropsWithChildren } from 'react';
import scss from './list.module.scss';

export default function ListEntry(props: PropsWithChildren) {
	return (
		<div className={scss.entry}>
			{props.children}
		</div>
	)
}