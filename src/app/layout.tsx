import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Balarama dan Fitri',
	icons: {
		icon: {
			type: 'image/jpg',
			url: '/icon.jpg',
		},
	},
};
import local from 'next/font/local';
const hendangan = local({
	src: [
		{
			path: '../public/fonts/Hendangan.ttf',
		},
	],
	variable: '--font-hendangan',
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${hendangan.variable}`}>
				{children}
			</body>
		</html>
	);
}
