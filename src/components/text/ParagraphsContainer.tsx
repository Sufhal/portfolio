import React from "react";
import scss from './text.module.scss';

export default function ParagraphsContainer(props: React.PropsWithChildren) {
	return (
		<div className={scss.paragraphsContainer}>
			{props.children}
		</div>
	)
}