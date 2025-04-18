import Link from "next/link";
import LargeLink from '#/components/buttons/LargeLink';
import ButtonRework from '#/components/buttons/ButtonRework';
import React from 'react';

export default function MainNavigationLinks(props: React.PropsWithoutRef<MainNavigationLinksProps>) {
	return (
		<ul>
			<li>
				<LargeLink href='/projects'>
					Projets
				</LargeLink>
			</li>
			<li>
				<LargeLink href='/skills'>
					Compétences
				</LargeLink>
			</li>
			<li>
				<LargeLink href='/about'>
					À propos de moi
				</LargeLink>
			</li>
			<li>
				{props.isMobile
					? 
						<LargeLink href='/contact'>
							Contact
						</LargeLink>
					: 
						<Link href={'/contact'}>
							<ButtonRework>Contact</ButtonRework>
						</Link>
				}
			</li>
		</ul>
	)
}

export interface MainNavigationLinksProps {
	isMobile: boolean;
}