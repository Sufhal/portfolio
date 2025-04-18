import { useRouter } from 'next/router';
import Cards from "#/components/cards/Cards";
import Card from "#/components/cards/Card";
import scss from './navigation.module.scss'
import ButtonRework from '#/components/buttons/ButtonRework';
import { useEffect, useRef, useState } from 'react';
import MainNavigationLinks from './MainNavigationLinks';
import LargeLink from '#/components/buttons/LargeLink';
import ScopeAnimation from '#/components/text/ScopeAnimation';
import LayoutTransition from '#/components/layout/LayoutTransition';

export default function MainNavigation() {

	const navRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isOpen, setIsOpen ] = useState(false);
	const router = useRouter();

	useEffect(() => {
		function onResize() {
			const isMobile = window.innerWidth <= 1000
			setIsMobile(_ => isMobile);
			if (isMobile) document.body.classList.add('isMobile');
			else document.body.classList.remove('isMobile');
		}
		function onClick(e: MouseEvent) {
			if (!(e.target instanceof HTMLElement) || !navRef.current || !menuRef.current) return;
			if (
				isOpen && 
				!navRef.current.contains(e.target) && 
				!menuRef.current.contains(e.target) && 
				menuRef.current !== e.target
			)
				setIsOpen(_ => false);
		}
		onResize();
		window.addEventListener('resize', onResize);
		document.addEventListener('click', onClick);
		return () => {
			window.removeEventListener('resize', onResize)
			document.removeEventListener('click', onClick);
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(_ => false);
	}, [router.asPath]);

	return (
		<>
			{isMobile && 
				<div 
					className={[scss.menuButton, isOpen ? scss.isOpen : scss.isClosed ].join(' ')}
					role='button' 
					ref={menuRef}
					onClick={() => setIsOpen(_ => !_)}
				>
					Menu
				</div>
			}
			<nav 
				ref={navRef}
				className={[
					scss.mainNavigation, 
					isMobile ? scss.isMobile : scss.isDesktop,
				].join(' ')}
			>
				{isMobile && isOpen && 
					<Cards>
						<Card noAnimation>
							<MainNavigationLinks isMobile={true} />
						</Card>
					</Cards>
				}
				{!isMobile && <MainNavigationLinks isMobile={false} />}				
			</nav>
		</>
	);
}