import React, {useContext, useEffect, useRef, useState} from "react";
import scss from './section.module.scss';
import Container from "#/components/container/Container";
import Animations from "#/classes/Animations";
import { Stage } from '#/classes/WankelController';
import { SmoothScrollContext } from '#/contexts/SmoothScroll.context';

export default function Section(props: React.PropsWithChildren<SectionProps>) {

	const sectionRef = useRef<HTMLElement>(null);
	const { scroll } = useContext(SmoothScrollContext);

	useEffect(() => {
		if (!sectionRef || !sectionRef.current) return;
		if (props.sector !== undefined && props.stage !== undefined && scroll) {
			Animations.setSector(props.sector, sectionRef.current, props.stage, scroll);
			if (props.sector === 0) {
				Animations.onPageTransition();
			}
		}
		return () => {
			if (props.sector)
				Animations.unsetSector(props.sector);
		};
	}, [props.sector, props.stage, sectionRef, scroll]);

	return (
		<section className={[scss.section, props.unsetMinHeight ? scss.unsetMinHeight : '', props.className ? props.className : ''].join(' ')} ref={sectionRef}>
			<Container>
				{props.children}
			</Container>
		</section>
	);
}

export interface SectionProps {
	className?: string;
	sector?: number;
	stage?: Stage;
	unsetMinHeight?: boolean;
}