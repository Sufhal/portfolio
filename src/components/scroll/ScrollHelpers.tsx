import Button from '#/components/buttons/Button';
import Container from '../container/Container';
import ButtonDown from './buttons/ButtonDown';
import ButtonUp from './buttons/ButtonUp';
import scss from './scrollHelpers.module.scss';

export default function ScrollHelpers() {
	return (
		<Container className={scss.container}>
			<ButtonUp />
			<ButtonDown />
		</Container>
	)
}