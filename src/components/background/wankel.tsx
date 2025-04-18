import {useEffect, useRef} from "react";
import WankelScene from "#/classes/WankelScene";
import scss from './wankel.module.scss';

export default function Wankel() {

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		(async () => {
			if (!containerRef || containerRef.current === null) return;
			if (!WankelScene.isInitialized) {
				WankelScene.load();
				WankelScene.init();
			}
			containerRef.current.appendChild(WankelScene.domElement);
		})();
		
		return () => {
			
		};
	}, [containerRef]);

	return (
		<>
			<div className={scss.canvasContainer} ref={containerRef}></div>
		</>
	);
}