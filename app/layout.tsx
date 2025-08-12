import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Provider from './provider';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
	title: 'AI Travel Planner',
	description: 'Plan your perfect trip with AI',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
