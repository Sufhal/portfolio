import { PropsWithoutRef, useEffect, useRef, useState } from 'react';
import scss from './logo.module.scss'
import Easings from '#/classes/Easings';
import Utils from '#/classes/Utils';
import useAnimationFrame from '#/hooks/useAnimationFrame';

const PI2 = Math.PI * 2;
const idleAngle = Math.PI / 2;

export default function Logo(props: PropsWithoutRef<LogoProps>) {

	const logoRef = useRef<HTMLDivElement>(null);
	const [ shouldAnimate, setShouldAnimate ] = useState(true);
	const isHovered = useRef(false);
	useAnimationFrame(tick, shouldAnimate)

	let angle = 0;
	let e = 13;
	let height = 175;
	let R = 101.11;
	let velocity = 0;
	let rotationDuration = 1000;
	let rotorStoppedTime = 0;
	let rotorStoppedAngle = 0;
	let oldTime = Date.now();

	function toggleStator() {
		if (velocity > 0 && logoRef && logoRef.current && !logoRef.current.classList.contains(scss.running)) {
				logoRef.current.classList.add(scss.running);
		} else {
			if (velocity === 0 && logoRef && logoRef.current && logoRef.current.classList.contains(scss.running)) {
				logoRef.current.classList.remove(scss.running);
			}
		}
	}
		
	function avoidAngleOverflow() {
		if (angle >= PI2 || angle <= -PI2) {
			angle = angle - PI2;
		}
	}
		
	function computeVelocity(delta: number) {
		if (isHovered.current) {
			velocity += delta * 0.0002;
		} else {
			if (velocity > 0) {
			velocity -= delta * 0.0004;
			if (velocity < 0) {
				velocity = 0;
				rotorStoppedTime = Date.now();
				rotorStoppedAngle = angle;
			}
			}
		}
	}
		
	function getRotation(angle: number, time: number) {
		if (velocity === 0) {
			if (angle === 0 || angle === PI2) return angle;
			const destAngle = PI2;
			if (time >= rotorStoppedTime + rotationDuration) {
				setShouldAnimate(false);
				return destAngle;
			}
			const factor = Easings.easeOutQuad(
				Utils.normalizeValueBetween(
					time,
					rotorStoppedTime,
					rotorStoppedTime + rotationDuration
				)
			);
			if (factor >= 1 || factor < 0) {
				setShouldAnimate(false);
				return destAngle
			}
			return Utils.denormalizeValueBetween(factor, rotorStoppedAngle, destAngle);
		} else {
			return angle + velocity;
		}
	}

	function tick() {
		const now = Date.now();
		const delta = now - oldTime;
		oldTime = now;
		const rotor = logoRef.current?.querySelector<SVGElement>(`.${scss.rotor}`);
		if (!rotor) return;
		computeVelocity(delta);
		angle = getRotation(angle, now);
		toggleStator();
		avoidAngleOverflow();
		const effectiveAngle = angle + idleAngle;
		height = logoRef.current?.getBoundingClientRect().height || height;
		R = height * 0.577771428571429;
		e = height * 0.074285714285714;

		const x = e * Math.cos(effectiveAngle) + R * Math.cos(effectiveAngle / 3);
		const y = e * Math.sin(effectiveAngle) + R * Math.sin(effectiveAngle / 3);

		const rotorAngle = (effectiveAngle + Math.PI * 1.5) / 3;

		// const { x, y, angle: rotorAngle } = calculatePosition(angle);
		// stator.style.transform = `translate3d(${-x}px, ${-y}px, 0px)`;
		rotor.style.transform = `translate3d(${x}px, ${
			y + height / 2
		}px, 0px) rotate3d(0, 0, 1, ${rotorAngle}rad)`;
	}

	function onMouseEnter() {
		setShouldAnimate(true);
		isHovered.current = true;
	}

	function onMouseLeave() {
		isHovered.current = false;
	}

	useEffect(() => {
		setShouldAnimate(false);
		if (!logoRef || !logoRef.current) return;
		if (props.size) {
			logoRef.current.style.setProperty('--size', props.size);
		}
		if (props.isHovered === undefined) {
			logoRef.current.addEventListener('mouseenter', onMouseEnter);
			logoRef.current.addEventListener('mouseleave', onMouseLeave);
		}
		return () => {
			setShouldAnimate(false);
			if (!logoRef || !logoRef.current || props.isHovered !== undefined) return;
			logoRef.current.removeEventListener('mouseenter', onMouseEnter);
			logoRef.current.removeEventListener('mouseleave', onMouseLeave);
		};
	}, []);

	useEffect(() => {
		if (props.isHovered !== undefined) {
			isHovered.current = props.isHovered;
			if (props.isHovered === true && !document.body.classList.contains('isMobile')) 
				setShouldAnimate(true);
		}
	}, [props.isHovered]);

	return (
		<div 
			className={scss.logo} 
			ref={logoRef} 
			data-animate
		>
			<svg
				className={scss.stator}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 227.96 174.07"
			>
				<g>
				<path
					d="M115.19,173.04s1.94,.03,1.94,.03l1.96,.06,1.98,.08,2.02,.1,2.06,.12,2.12,.13h0s2.18,.13,2.18,.13l2.25,.12,2.32,.11,2.4,.08,2.49,.05h2.57l2.66-.06,2.75-.13h0s2.84-.21,2.84-.21l2.92-.31,3-.41,3.08-.53,3.15-.67,3.21-.81,3.26-.96,3.3-1.12,3.34-1.29,3.36-1.47,3.36-1.65,3.35-1.84,3.33-2.04,3.3-2.23,3.25-2.43,3.18-2.63s3.09-2.83,3.09-2.83l2.99-3.02s2.88-3.21,2.88-3.21l2.75-3.4,2.6-3.58,2.44-3.74,2.27-3.91h0s2.08-4.05,2.08-4.05l1.88-4.19,1.67-4.31,1.45-4.42,1.22-4.51,.99-4.59s.75-4.65,.75-4.65c0,0,.5-4.7,.5-4.7,0,0,.25-4.72,.25-4.72v-4.73s-.25-4.72-.25-4.72c0,0-.5-4.7-.5-4.7,0,0-.74-4.65-.74-4.65,0,0-.99-4.59-.99-4.59,0,0-1.22-4.52-1.22-4.52l-1.45-4.42-1.67-4.31s-1.88-4.19-1.88-4.19c0,0-2.08-4.05-2.08-4.05l-2.27-3.91-2.44-3.75s-2.6-3.58-2.6-3.58c0,0-2.75-3.4-2.75-3.4,0,0-2.88-3.22-2.88-3.22,0,0-2.99-3.03-2.99-3.02,0,0-3.09-2.83-3.09-2.83,0,0-3.18-2.63-3.18-2.63,0,0-3.24-2.43-3.24-2.43,0,0-3.3-2.24-3.3-2.24,0,0-3.33-2.04-3.33-2.04,0,0-3.35-1.84-3.35-1.84,0,0-3.36-1.65-3.36-1.65,0,0-3.36-1.47-3.36-1.47,0,0-3.34-1.29-3.34-1.29,0,0-3.31-1.12-3.31-1.12,0,0-3.26-.96-3.26-.96,0,0-3.21-.81-3.21-.81,0,0-3.15-.67-3.15-.67l-3.08-.54s-3-.42-3-.42c0,0-2.92-.31-2.92-.31l-2.84-.21s-2.75-.13-2.75-.13c0,0-2.66-.06-2.66-.06h-2.57s-2.49,.05-2.49,.05c0,0-2.4,.08-2.4,.08l-2.32,.11s-2.25,.12-2.25,.12l-2.18,.13s-2.12,.13-2.12,.13l-2.07,.12s-2.02,.1-2.02,.1c0,0-1.98,.08-1.98,.08,0,0-1.96,.06-1.96,.06l-1.94,.03s-1.93,0-1.93,0c0,0-1.94-.02-1.94-.02,0,0-1.95-.05-1.95-.05,0,0-1.98-.08-1.98-.08,0,0-2.01-.1-2.01-.1,0,0-2.05-.12-2.05-.12,0,0-2.1-.13-2.1-.13l-2.16-.13s-2.23-.13-2.23-.13c0,0-2.3-.11-2.3-.11,0,0-2.38-.09-2.38-.09,0,0-2.47-.06-2.47-.06h-2.55s-2.64,.03-2.64,.03c0,0-2.73,.11-2.73,.11,0,0-2.81,.19-2.81,.19,0,0-2.9,.28-2.9,.28,0,0-2.98,.39-2.98,.39,0,0-3.06,.5-3.06,.5,0,0-3.13,.63-3.13,.63,0,0-3.19,.77-3.19,.77l-3.25,.92s-3.29,1.08-3.29,1.08c0,0-3.33,1.25-3.33,1.25,0,0-3.35,1.42-3.35,1.42l-3.36,1.61s-3.36,1.79-3.36,1.79l-3.34,1.99s-3.31,2.18-3.31,2.18c0,0-3.26,2.38-3.26,2.38l-3.2,2.58-3.12,2.78-3.02,2.98s-2.91,3.17-2.91,3.17c0,0-2.78,3.35-2.78,3.35,0,0-2.64,3.53-2.64,3.53,0,0-2.48,3.7-2.48,3.7,0,0-2.31,3.87-2.31,3.87,0,0-2.13,4.02-2.13,4.02,0,0-1.93,4.16-1.93,4.16,0,0-1.73,4.28-1.73,4.28,0,0-1.51,4.4-1.51,4.4,0,0-1.28,4.49-1.28,4.49,0,0-1.05,4.57-1.05,4.57,0,0-.81,4.64-.81,4.64,0,0-.56,4.69-.56,4.69,0,0-.31,4.72-.31,4.72,0,0-.06,4.73-.06,4.73,0,0,.19,4.73,.19,4.73,0,0,.44,4.71,.44,4.71l.68,4.67,.93,4.61h0s1.17,4.54,1.17,4.54l1.4,4.45s1.62,4.34,1.62,4.34l1.83,4.22,2.03,4.09,2.22,3.94,2.4,3.79,2.56,3.62,2.71,3.45h0s2.85,3.26,2.85,3.26l2.97,3.07,3.07,2.88,3.16,2.68h0s3.23,2.48,3.23,2.48l3.29,2.28,3.33,2.09s3.35,1.89,3.35,1.89l3.36,1.7,3.36,1.51,3.34,1.33,3.31,1.16h0s3.27,1,3.27,1l3.22,.84,3.16,.7,3.1,.57,3.02,.44,2.94,.33,2.86,.24,2.77,.15,2.68,.08h2.6s2.51-.02,2.51-.02l2.42-.08,2.34-.1,2.27-.12,2.2-.13,2.13-.13s2.08-.12,2.08-.12l2.03-.11,1.99-.09,1.96-.07,1.94-.04h1.93s1.94,0,1.94,0l1.95,.05,1.97,.07,2,.09,2.04,.11,2.09,.12s2.15,.13,2.15,.13l2.21,.13,2.29,.12,2.36,.1,2.45,.07h0s2.53,.03,2.53,.03l2.62-.03,2.71-.09,2.79-.17,2.88-.26,2.96-.36,3.04-.47,3.11-.6,3.18-.74,3.24-.88,3.28-1.04,3.32-1.2s3.35-1.38,3.35-1.38l3.36-1.56,3.36-1.75h0s3.35-1.94,3.35-1.94l3.32-2.13,3.27-2.33,3.21-2.53,3.14-2.73,3.05-2.93h0s2.94-3.12,2.94-3.12c0,0,2.82-3.31,2.82-3.31,0,0,2.68-3.49,2.68-3.49l2.52-3.66h0s2.36-3.83,2.36-3.83c0,0,2.18-3.98,2.18-3.98l1.98-4.12,1.78-4.25,1.56-4.37s1.34-4.47,1.34-4.47l1.11-4.56s.87-4.62,.87-4.63c0,0,.62-4.68,.62-4.68l.38-4.71"
				/>
				<circle cx="113.98" cy="87.03" r="33.25" />
				</g>
			</svg>
			<svg
				className={scss.rotor}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 173.04 173.04"
			>
				<g>
				<path
					d="M149.86,63.34C134.67,37.03,112.82,15.19,86.52,0,60.21,15.19,38.37,37.03,23.18,63.34,8,89.64,0,119.48,0,149.86c26.31,15.19,56.14,23.18,86.52,23.18s60.21-8,86.52-23.18c0-30.37-8-60.21-23.18-86.52Zm-63.34,83.36c-25.8,0-46.71-20.91-46.71-46.71s20.91-46.71,46.71-46.71,46.71,20.91,46.71,46.71-20.91,46.71-46.71,46.71Z"
				/>
				</g>
			</svg>
		</div>
	)
}

export interface LogoProps {
	isHovered?: boolean;
	size?: string;
	maxSpeed?: number;
}