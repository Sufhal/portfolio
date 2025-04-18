import { PropsWithoutRef } from 'react';
import Cards from '../cards/Cards';
import Card from '../cards/Card';
import Paragraph from './Paragraph';
import LargeLink from '../buttons/LargeLink';
import scss from './text.module.scss';

export default function Quote(props: PropsWithoutRef<QuoteProps>) {
	return (
		<div className={scss.quote}>
			<Cards>
				<Card>
					<Paragraph>{props.content}</Paragraph>
					<LargeLink href={props.link}>{props.from}</LargeLink>
				</Card>
			</Cards>
		</div>
	);
}

export interface QuoteProps {
	link: string;
	from: string;
	content: string;
}