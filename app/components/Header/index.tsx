import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const menuOption = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Pricing',
		path: '/pricing',
	},
	{
		name: 'Contact',
		path: '/contact',
	},
];

const Header = () => {
	return (
		<header className="flex justify-between items-center p-4">
			<div className="flex gap-2 items-center">
				<Image
					src={'logo.svg'}
					alt="logo"
					width={38}
					height={38}
				/>
				<h2 className="font-bold text-2xl">AI Trip Planner</h2>
			</div>
			<div className="flex gap-8 items-center">
				{menuOption.map((menu, index) => (
					<Link
						key={index}
						href={menu.path}
					>
						<h2 className="text-lg hover:scale-105 transition-all font-semibold hover:font-bold hover:text-primary">
							{menu.name}
						</h2>
					</Link>
				))}
			</div>
			<Button>Get started</Button>
		</header>
	);
};

export default Header;
