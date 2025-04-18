import { PropsWithChildren, PropsWithoutRef } from 'react';
import scss from './text.module.scss';

export default function Skill(props: PropsWithoutRef<SkillProps>) {
	return (
		<div className={scss.skill} data-animate>
			{new Array(props.lv).fill(true).map((_, idx) => (
				<div key={idx} className={scss.point}></div>
			))}
		</div>
	)
}

export interface SkillProps {
	lv: number;
}