import { useState } from 'react';
import Card from '../components/fragments/Card';
import projects from '../../data/projects';
import certificates from '../../data/certificates';
import Button from '../components/elements/Button/Button';

const Portofolio = () => {
	const [selected, setSelected] = useState('Projects');

	return (
		<section
			id="portfolio"
			className="min-h-screen flex flex-col items-center justify-center py-12"
		>
			<div className="relative mb-10">
				<div className="absolute w-176 h-24 max-[520px]:w-full bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2"></div>
				<h1 className="text-6xl font-bold tracking-wide relative text-center max-[520px]:text-5xl">
					Portfolio{' '}
					<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
						Showcase
					</span>
				</h1>
				<p className="mt-6 max-w-180 mx-auto text-center text-gray-400 text-xl max-[520px]:text-lg">
					Explore my journey through projects, certifications, and technical
					expertise. Each section represents a milestone in my continuous
					learning path.
				</p>
			</div>
			<div className="relative">
				<div className="absolute -inset-1 bg-linear-to-r from-emerald-400 to-teal-500 blur-2xl opacity-20 rounded-xl" />
				<div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-2">
					{['Projects', 'Certificates'].map((item) => (
						<button
							key={item}
							onClick={() => setSelected(item)}
							className={`
								flex items-center justify-center gap-2
								px-12 max-[520px]:px-7 py-4 rounded-lg font-semibold
								transition-all duration-300
								${
									selected === item
										? 'bg-linear-to-r from-emerald-400 to-teal-500 text-white shadow-lg'
										: 'text-gray-400 hover:text-white'
								}
							`}
						>
							{item === 'Projects' ? (
								<span className="text-lg">{`</>`}</span>
							) : (
								<span className="text-lg"></span>
							)}
							{item}
						</button>
					))}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-5 gap-y-5 pt-12 max-[520px]:grid-cols-1">
				{selected === 'Projects'
					? projects.map((item) => (
							<Card
								key={item.id}
								title={item.title}
								image={item.image}
								description={item.description}
								id={item.id}
							/>
						))
					: certificates.map((item) => (
							<div key={item.id} className="relative group cursor-pointer">
								<div className="absolute w-full h-full group-hover:bg-black/60 rounded-lg transition duration-300"></div>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent font-semibold text-center group-hover:text-white text-lg w-full px-12">
									<p>{item.title}</p>
									<a
										href={item.link}
										className="hover:underline transition duration-300 hover:text-emerald-400 hidden group-hover:block mt-3"
									>
										<Button variant="primary" width="w-24">
											Detail
										</Button>
									</a>
								</div>
								<img src={item.image} alt="" className="rounded-lg" />
							</div>
						))}
			</div>
		</section>
	);
};

export default Portofolio;
