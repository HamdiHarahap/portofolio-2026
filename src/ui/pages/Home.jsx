import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Typed from 'typed.js';
import GlassAvatar from '../components/elements/Avatar/GlassAvatar';
import Button from '../components/elements/Button/Button';

const Home = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				'Software Engineer Student',
				'Tech Enthusiast',
				'Freelance Web Developer',
			],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);

	const socials = [
		{
			img: 'assets/icons/linkedin.svg',
			href: 'https://www.linkedin.com/in/hamdiharahap/',
		},
		{
			img: 'assets/icons/github.svg',
			href: 'https://github.com/HamdiHarahap',
		},
		{
			img: 'assets/icons/instagram.svg',
			href: 'https://www.instagram.com/hhmdi_/',
		},
	];

	return (
		<section
			className="flex justify-between items-center min-h-screen"
			id="home"
		>
			<div className="flex flex-col gap-7 w-1/2">
				<div className="relative">
					<div className="absolute w-96 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full -top-5 -left-10"></div>
					<div className="absolute w-108 h-20 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full -bottom-5  -left-10 "></div>
					<h1 className="text-7xl font-bold tracking-wide z-40 relative">
						Fullstack <br />{' '}
						<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
							Developer
						</span>
					</h1>
				</div>
				<div>
					<span ref={el} className="text-2xl"></span>
				</div>
				<div className="flex items-center gap-10">
					{socials.map((item, index) => (
						<div key={index} className="relative group">
							<div className="absolute -inset-2 bg-linear-to-r from-emerald-400 to-teal-500 blur-xl opacity-30 rounded-xl group-hover:opacity-60 transition duration-300" />

							<a
								href={item.href}
								target="_blank"
								className="relative flex items-center justify-center p-2 border border-white/10 rounded-xl bg-linear-to-br from-[#020617] via-[#0B1120] to-[#020617] hover:scale-110 transition duration-300"
							>
								<img src={item.img} alt="" className="w-6 h-6" />
							</a>
						</div>
					))}
				</div>
				<p className="text-lg text-gray-400">
					Modern web development focused on performance, scalability, and clean
					user experience.
				</p>
				<div className="flex items-center gap-5">
					{[
						{
							name: 'Projects',
							href: '#projects',
							img: 'assets/icons/link-to.svg',
						},
						{
							name: 'Contact',
							href: '#contact',
							img: 'assets/icons/mail.svg',
						},
					].map((item, index) => (
						<div key={index} className="relative group">
							<div className="absolute -inset-1 bg-linear-to-r from-emerald-400 to-teal-500 blur-xl opacity-30 rounded-xl group-hover:opacity-60 transition duration-300" />

							<a href={item.href} className="relative z-10">
								<Button variant="primary" className="flex items-center gap-3">
									<p>{item.name}</p> <img src={item.img} className="w-5" />
								</Button>
							</a>
						</div>
					))}
				</div>
			</div>
			<div>
				<GlassAvatar>
					<img
						src="assets/images/avatar.jpeg"
						alt="Profile"
						className="w-full h-full object-cover"
					/>
				</GlassAvatar>
			</div>
		</section>
	);
};

export default Home;
