import React, { MouseEvent, RefObject } from 'react';
import scssCard from '#/components/cards/card.module.scss';
import scssButton from '#/components/buttons/buttons.module.scss';

export default React.forwardRef<HTMLDivElement, React.PropsWithChildren<ButtonReworkProps>>(
	function ButtonRework(props, ref) {
		return (
			<div 
				ref={ref}
				onClick={(e) => props.onClick ? props.onClick(e) : null} 
				className={[scssCard.blur, scssCard.interactible, scssCard.clickable, scssButton.btn].join(' ')} 
				data-card
				data-animate
			>
				{props.children}
			</div>
		)
	}
)

export interface ButtonReworkProps {
	onClick?: (e: MouseEvent) => void;
}