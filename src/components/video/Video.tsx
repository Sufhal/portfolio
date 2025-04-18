import { PropsWithoutRef, useEffect, useState } from 'react';
import scss from './video.module.scss';

export default function Video(props: PropsWithoutRef<VideoProps>) {

	return (
		<div className={scss.player}>
			<video autoPlay loop muted preload='auto'>
				<source src={props.source} type='video/mp4' />
			</video>
		</div>
	)
}

export interface VideoProps {
	source: string;

}
