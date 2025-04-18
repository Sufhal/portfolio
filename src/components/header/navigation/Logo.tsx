import Link from "next/link";
import LogoSymbol from '#/components/logo/Logo';
import { useState } from 'react';
import scss from './navigation.module.scss';

export default function Logo() {

	const [ isHovered, setIsHovered ] = useState(false);

	return (
		<Link 
			className={scss.logo} 
			href={'/'} 
			onMouseEnter={() => setIsHovered(true)} 
			onMouseLeave={() => setIsHovered(false)}
		>
			<LogoSymbol isHovered={isHovered} size='2em' />
			<span data-animate>Girold</span>
		</Link>
	);
}