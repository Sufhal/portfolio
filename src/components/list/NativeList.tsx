import { PropsWithChildren } from 'react';
import scss from './list.module.scss';
import scssText from '../text/text.module.scss';

export default function NativeList(props: PropsWithChildren) {
	return (
		<ul className={[scssText.paragraph, scss.nativeList].join(' ')}>
			{props.children}
		</ul>
	)
}