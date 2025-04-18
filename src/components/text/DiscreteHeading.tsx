import { PropsWithChildren } from 'react';
import scss from './text.module.scss';

export default function DiscreteHeading(props: PropsWithChildren<DiscreteHeadingProps>) {
	return (
		<h4 
			className={[scss.discreteHeading, props.noSpacing ? scss.noSpacing : ''].join(' ')}
			data-animate
		>
			{props.children}
		</h4>
	)
}

export interface DiscreteHeadingProps {
	noSpacing?: boolean
}