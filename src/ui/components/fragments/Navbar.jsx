import { useState, useEffect } from 'react';

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('');
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 150);

			const sections = document.querySelectorAll('section[id]');
			let current = '';
			sections.forEach((section) => {
				const sectionTop = section.offsetTop - 150;
				if (window.scrollY >= sectionTop) {
					current = section.getAttribute('id');
				}
			});
			setActiveSection(current ? `#${current}` : '');
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const paths = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Portfolio', href: '#portfolio' },
		{ name: 'Contact', href: '#contact' },
	];

	const toogleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all py-2 duration-200 ${
				isScrolled ? 'bg-[#030014]/80 shadow-lg shadow-emerald-500/10' : ''
			}`}
		>
			<div className="px-36 py-4 flex justify-between items-end max-[520px]:px-4 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-8">
				<div className="max-[520px]:flex max-[520px]:justify-between max-[520px]:items-center max-[520px]:w-full">
					<a
						href="#"
						className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold text-lg max-[520px]:text-xl"
					>
						Hamdi Harahap
					</a>
					<img
						src="assets/icons/menu.svg"
						alt=""
						className="w-7 hidden max-[520px]:block"
						onClick={toogleMenu}
					/>
				</div>

				<ul
					className={`flex gap-8 text-gray-300 text-sm max-[520px]:text-base font-semibold max-[520px]:flex-col ${isOpen ? '' : 'max-[520px]:hidden'}`}
				>
					{paths.map((item, index) => (
						<li
							key={index}
							className="group cursor-pointer tracking-wide flex flex-col gap-1"
						>
							<a
								className={
									activeSection === item.href
										? 'text-emerald-400'
										: 'hover:text-emerald-400 transition'
								}
								href={item.href}
							>
								{item.name}
							</a>
							<div className="h-[0.10rem] bg-linear-to-r from-emerald-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left "></div>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
