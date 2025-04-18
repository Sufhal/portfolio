import React, {useEffect, useRef} from "react";
import scss from './card.module.scss';

export default function Cards(props: React.PropsWithChildren) {

	return (
		<div className={scss.cards}>
			{props.children}
		</div>
	);
}