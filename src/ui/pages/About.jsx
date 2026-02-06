import Button from '../components/elements/Button/Button';

const About = () => {
	return (
		<section
			id="about"
			className="min-h-screen flex flex-col justify-center gap-7"
		>
			<div className="relative">
				<div className="absolute w-96 max-[520px]:w-56 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full -top-5 -left-10"></div>
				<div className="absolute w-140 max-[520px]:w-56 h-16 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full -bottom-5 -left-10 "></div>
				<h1 className="text-6xl max-[520px]:text-5xl font-bold tracking-wide z-40 relative">
					Hello, I'm <br />{' '}
					<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
						Hamdi Harahap
					</span>
				</h1>
			</div>
			<p className="text-2xl text-gray-400 max-[520px]:text-xl">
				A Software Engineering Technology student with a keen interest in
				Fullstack Development. I focus on creating engaging digital experiences
				and always strive to deliver the best solutions in every project I work
				on.
			</p>
			<div className="relative w-fit">
				<div className="absolute -inset-1 max-[520px]:inset-0 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl max-[520px]:blur-3xl opacity-30 rounded-2xl" />
				<div className="relative flex items-center gap-2 ps-6 pe-20 max-[520px]:pe-6 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-gray-20 font-medium italic max-[520px]:items-start">
					<span className="text-3xl text-emerald-400 leading-none max-[520px]:text-2xl">
						“
					</span>
					<p>Build systems. Solve problems. Keep learning.</p>
				</div>
			</div>

			<div className="flex items-center gap-5 max-[520px]:justify-center">
				{[
					{
						name: 'Download CV',
						href: 'https://drive.google.com/file/d/1u3blF_pQ7xRWhYKAgnoiYykELSPDjrQO/view?usp=sharing',
						img: 'assets/icons/file.svg',
					},
					{
						name: 'Projects',
						href: '#portfolio',
						img: 'assets/icons/code.svg',
					},
				].map((item, index) => (
					<div key={index}>
						<a
							href={item.href}
							target={item.href == '#portfolio' ? '' : '_blank'}
						>
							<Button
								variant={item.name === 'Projects' ? 'secondary' : 'default'}
								className="flex items-center gap-3"
							>
								<p>{item.name}</p>
								<img src={item.img} className="w-5" />
							</Button>
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
