import { PropsWithChildren } from 'react';
import scss from './layout.module.scss';

export default function FlexRow(props: PropsWithChildren) {
	return (
		<div className={scss.flexRow}>
			{props.children}
		</div>
	);
}