import React, {useEffect, useRef} from "react";
import scssCard from './card.module.scss';

export default function Card(props: React.PropsWithChildren<CardProps>) {

	return (
		<div 
			className={[scssCard.blur, scssCard.interactible, scssCard.card].join(' ')}
			data-card
			data-animate={!props.noAnimation}
		>
			{props.children}
		</div>
	);
}

export interface CardProps {
	noAnimation?: boolean;
}