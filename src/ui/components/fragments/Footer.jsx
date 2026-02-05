const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="px-36 text-center max-[520px]:px-4">
			<div className="w-full h-[0.10rem] bg-gray-500"></div>
			<p className="mt-10 text-white font-semibold">
				Made with 💖 by{' '}
				<span className="bg-linear-to-r bg-emerald-400 to-teal-500 bg-clip-text text-transparent">
					Hamdi Harahap
				</span>{' '}
				&copy; {year}
			</p>
		</footer>
	);
};

export default Footer;
