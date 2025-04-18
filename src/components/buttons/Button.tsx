import React from 'react';
import Card from '../cards/Card';

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
	return (
		<>
			{
				props.circle && 
					<Card>
						{props.children}
					</Card>
			}
			{
				!props.circle && 
					<Card>
						{props.children}
					</Card>
			}

		</>
	);
}

export interface ButtonProps {
	circle?: any;
}