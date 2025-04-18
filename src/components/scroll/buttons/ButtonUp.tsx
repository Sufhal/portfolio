import Button from '#/components/buttons/Button';
import scss from './scrollButtons.module.scss';

export default function ButtonUp() {
	return (
		<div className={scss.up}>
			<Button circle>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="7 7 17 7 17 17"></polyline>
				</svg>
			</Button>
		</div>
	);
}