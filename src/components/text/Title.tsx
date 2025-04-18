import React, { useEffect } from "react";
import scss from './text.module.scss';
import TextAnimation from './ScopeAnimation';

export default function Title(props: React.PropsWithChildren<TitleProps>) {

	return (
		<>

				{!props.type &&
					<h1 
						className={[scss.titlePrimary, scss.textPrimary].join(' ')}
						data-animate
					>
						{props.children}
					</h1>
				}
				{props.type === 'subtitle' &&
					<h2 
						className={[scss.titleSecondary, scss.textSecondary].join(' ')}
						data-animate
					>
						{props.children}
					</h2>
				}
		</>
	);
}

export interface TitleProps {
	type?: 'subtitle';
}