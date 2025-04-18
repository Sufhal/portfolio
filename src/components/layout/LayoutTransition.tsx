import { useState, useEffect } from 'react';
import scss from './layout.module.scss';

export default function LayoutTransition(props: React.PropsWithChildren) {

	const [displayChildren, setDisplayChildren] = useState(props.children);
	const [transitionStage, setTransitionStage] = useState('fadeOut');
	useEffect(() => {
		setTransitionStage('fadeIn');
	}, []);

	useEffect(() => {
		if (props.children !== displayChildren) 
			setTransitionStage('fadeOut');
	}, [props.children, setDisplayChildren, displayChildren]);

	return (
		<div
			onTransitionEnd={() => {
				if (transitionStage === 'fadeOut') {
					setDisplayChildren(props.children);
					setTransitionStage('fadeIn');
				}
			}}
			className={`${scss.layoutTransition} ${scss[transitionStage]}`}
		>
			{displayChildren}
		</div>
	);
}
	