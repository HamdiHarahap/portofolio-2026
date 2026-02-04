import { Link, useLocation } from 'react-router-dom';
import DetailLayouts from '../layouts/DetailLayouts';
import Button from '../components/elements/Button/Button';
import projects from '../../data/projects';
import { useEffect } from 'react';

const Project = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const location = useLocation();
	const id = parseInt(location.pathname.split('/')[2]);
	const details = projects.find((item) => item.id === id);
	console.log(details);

	return (
		<DetailLayouts>
			<nav className="py-12">
				<Link to="/#portfolio">
					<Button variant="secondary" width="w-26">
						Back
					</Button>
				</Link>
			</nav>
			<section className="flex justify-between gap-10">
				<div>
					<div className="flex flex-col gap-5 relative">
						<div className="absolute w-96 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full -top-5 -left-10"></div>
						<h1 className="text-6xl font-bold tracking-wide z-40 relative bg-clip-text bg-linear-to-r from-emerald-200 via-white to-teal-300 text-transparent">
							{details.title}
						</h1>
						<div className="w-28 h-1 bg-linear-to-r from-emerald-400 to-teal-500 rounded-full"></div>
					</div>
					<p className="my-8 text-gray-300 text-lg">{details.description}</p>
					<div>
						<a
							href={details.link}
							className="flex gap-2 items-centerbg-linear-to-r from-emerald-300/50 via-emerald-200/40 to-teal-300/50 rounded-lg px-6 py-3 border border-emerald-400/70 w-fit cursor-pointer relative group overflow-hidden shadow-lg shadow-emerald-500/30 transition"
						>
							<div className="absolute inset-0 bg-linear-to-r from-emerald-400/40 to-teal-400/40 rounded-lg transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>

							<img
								src="/assets/icons/github-emerald.svg"
								alt=""
								className="w-7 z-10"
							/>

							<p className="font-bold bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 text-transparent">
								Github
							</p>
						</a>
					</div>
					<div className="mt-10">
						<h2 className="text-xl font-bold">
							<span className="bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 text-transparent">
								{'</>'}
							</span>{' '}
							Technologies Used
						</h2>
						<div className="flex gap-3 items-center py-5">
							{details.tech.map((item, index) => (
								<Button key={index} width="w-32">
									{item}
								</Button>
							))}
						</div>
					</div>
				</div>
				<div>
					<div className="group">
						<div className="w-140 h-86 overflow-hidden rounded-md group-hover:border-3 group-hover:border-emerald-400 transition duration-300">
							<img
								src={`/${details.image}`}
								className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
							/>
						</div>
					</div>
				</div>
			</section>
		</DetailLayouts>
	);
};

export default Project;
