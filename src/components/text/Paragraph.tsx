import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import scss from './text.module.scss';

const LinesGroup = dynamic(() => import('#/components/text/LinesGroup'), {
	ssr: false
});

export default function Paragraph(props: React.PropsWithChildren<ParagraphProps>) {

	const [ windowReady, setWindowReady ] = useState(false);

	useEffect(() => {
		setWindowReady(true);
	}, []);

	function getStyleByLevel(level?: ParagraphLevel): string {
		switch (level) {
			case 'primary':
				return scss.textPrimary;
			case 'tertiary':
				return scss.textTertiary;
			case 'secondary':
			default:
				return scss.textSecondary;
		}
	}

	return (
		<p 
			className={[scss.paragraph, getStyleByLevel(props.level)].join(' ')}
			data-animate
		>
		
			{ windowReady && !props.disableLineSplit
				? <LinesGroup>{props.children}</LinesGroup>
				: props.children
			}
		</p>
	);
}

export interface ParagraphProps {
	disableLineSplit?: boolean
	primary?: boolean;
	level?: ParagraphLevel
}

export type ParagraphLevel = 'primary' | 'secondary' | 'tertiary';