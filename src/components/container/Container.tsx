import container from './container.module.scss';
import React from "react";

export default function Container(props: React.PropsWithChildren<ContainerProps>) {
	return (
		<div className={[container.container, props.className].join(' ')}>
			{props.children}
		</div>
	)
}

export interface ContainerProps {
	className?: string;
}