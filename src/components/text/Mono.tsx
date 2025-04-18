import React from 'react';
import scssText from '#/components/text/text.module.scss';
import scssCard from '#/components/cards/card.module.scss';

export default function Mono(props: React.PropsWithChildren) {
	return (
		<span className={[scssText.mono, scssCard.text, scssCard.blur ].join(' ')}>
			{props.children}
		</span>
	);
}