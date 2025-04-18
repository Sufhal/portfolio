import Container from "#/components/container/Container";
import MainNavigation from "#/components/header/navigation/MainNavigation";
import Logo from "#/components/header/navigation/Logo";
import scss from './header.module.scss';
import ScopeAnimation from '../text/ScopeAnimation';

export default function Header() {
	return (
		<header className={scss.headerNode}>
			<ScopeAnimation isVisible={true}>
				<Container className={scss.headerContainer}>
					<Logo />
					<MainNavigation />
				</Container>
			</ScopeAnimation>
		</header>
	);
}