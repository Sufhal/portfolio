import { PropsWithChildren } from 'react';
import scss from './list.module.scss';

export default function List(props: PropsWithChildren<ListProps>) {
	return (
		<div className={[scss.list, props.horizontal ? scss.horizontal : ''].join(' ')}>
			{props.children}
		</div>
	)
}

export interface ListProps {
	horizontal?: boolean;
}