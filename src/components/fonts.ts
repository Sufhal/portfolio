import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const titleFont = localFont({ src: [
		{
			path: '../../public/fonts/BasierCircle-Bold.woff2',
			weight: '700',
			style: 'bold'
		}, {
			path: '../../public/fonts/BasierCircle-Medium.woff2',
			weight: '500',
			style: 'bold'
		}, {
			path: '../../public/fonts/BasierCircle-Regular.woff2',
			weight: '400',
			style: 'normal'
		}
	] });

export const textFont = Inter({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

export const textBoldFont = Inter({
	weight: '500',
	style: 'normal',
	subsets: ['latin']
});

export const monoFont = JetBrains_Mono({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});