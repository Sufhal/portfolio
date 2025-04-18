import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import Header from '#/components/header/Header';
import MouseEffects from '#/classes/MouseEffects';
import Footer from '#/components/footer/Footer';
import { SmoothScrollProvider } from '#/contexts/SmoothScroll.context';
import ScrollAnimation from '../scroll/ScrollAnimation';
import Animations from '#/classes/Animations';

const locomotiveOptions = { 
	smooth: true,
	multiplier: .6
};

export default function PageContainer(props: React.PropsWithChildren) {

	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		MouseEffects.listenEvents();
		return () => {
			MouseEffects.dispose();
		}
	}, []);

	return (
		<>
			<SmoothScrollProvider options={locomotiveOptions}>
				<ScrollAnimation>
					<Head>
						<title>Jules Girold</title>
						<meta name='description' content='Jules Girold • Portfolio' />
						<meta name='viewport' content='width=device-width, initial-scale=1' />
						<link rel='icon' type='image/svg+xml' href='favicon/favicon-dark.svg' media='(prefers-color-scheme: dark)' />
						<link rel='icon' type='image/png' href='favicon/favicon-dark.png' media='(prefers-color-scheme: dark)' />
						<link rel='icon' type='image/svg+xml' href='favicon/favicon-light.svg' media='(prefers-color-scheme: light)' />
						<link rel='icon' type='image/png' href='favicon/favicon-light.png' media='(prefers-color-scheme: light)' />
						<meta property="og:title" content="Jules Girold • Portfolio" />
						<meta property="og:description" content="Développeur Typescript fullstack à la recherche continue de nouvelles connaissances. Également intéressé par la 3D, l'UI/UX, le DevOps et l'administration système." />
						<meta property="og:type" content="website" />
						<meta property="og:image" content="https://girold.io/og/OG_sized.jpg" />
						<meta name="google-site-verification" content="uvuzXCaoSLc4cdCEO3ykCO7o7Dklm2CHLgpn-ppixQg" />

					</Head>
					<Script src='https://www.googletagmanager.com/gtag/js?id=G-3H303NDRQ4' strategy='afterInteractive' />
					<Script id='google-analytics' strategy='afterInteractive'>
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-3H303NDRQ4');
						`}
					</Script>
					<main data-scroll-container ref={containerRef}>
						{ props.children }
						<Footer sector={Infinity} stage={{
							cameraPosition: new Vector3(-21.23012838889994, -67.76300013860029, 51.942527021498776),
							orbitTarget: new Vector3(-3.256339369755746, 1.7457941709742157, 2.7255068886617138),
							isLocked: false,
							engineSpeed: .1,
							splitFactor: 0,
							shakeStrength: 0,
							light: .2
						}} />
					</main>
				</ScrollAnimation>
			</SmoothScrollProvider>
		</>
	);
}