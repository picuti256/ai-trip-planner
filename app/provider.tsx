import Header from './components/Header';

const Provider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Provider;
