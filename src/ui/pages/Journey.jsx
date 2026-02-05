const Journey = () => {
	const journeys = [
		{
			year: '2023 - 2027',
			title: 'Politeknik Negeri Medan',
			major: 'Software Engineering',
		},
		{
			year: '2020 - 2023',
			title: 'MAN 2 Model Medan',
			major: 'Natural Sciences',
		},
		{
			year: '2017 - 2020',
			title: 'SMP Muhammadiyah 1 Medan',
			major: 'General Studies',
		},
	];

	return (
		<section className="pb-20 flex flex-col">
			<div className="relative">
				<div className="absolute w-96 max-[520px]:w-56 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<div className="absolute w-140 max-[520px]:w-56 h-16 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<h1 className="text-6xl font-bold tracking-wide z-40 relative text-center max-[520px]:text-5xl">
					My Educational <br />{' '}
					<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
						Journey
					</span>
				</h1>
			</div>
			<div className="flex flex-col items-center max-[520px]:w-full pt-32 max-[520px]:gap-10 max-[520px]:hidden">
				<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center relative">
					<div className="bg-linear-to-r from-emerald-400 to-teal-500 w-8 h-8 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-emerald-400/40 max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full min-[520px]:hidden"></div>
					<div className="text-end max-[520px]:text-start max-[520px]:w-60">
						<h4 className="text-emerald-400 font-semibold text-lg max-[520px]:text-base">
							2023 - 2027
						</h4>
						<h1 className="font-bold text-3xl rounded-t-md max-[520px]:text-2xl">
							Politeknik Negeri Medan
						</h1>
						<p className="text-gray-400 font-semibold text-xl max-[520px]:text-lg">
							Software Engineering
						</p>
					</div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full max-[520px]:hidden"></div>
					<div className="max-[520px]:hidden"></div>
				</div>

				<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center relative">
					<div className="bg-linear-to-r from-emerald-400 to-teal-500 w-8 h-8 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-emerald-400/40 max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full min-[520px]:hidden"></div>
					<div className="max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto max-[520px]:hidden"></div>
					<div className="text-start max-[520px]:w-60">
						<h4 className="text-emerald-400 font-semibold text-lg max-[520px]:text-base">
							2020 - 2023
						</h4>
						<h1 className="font-bold text-3xl max-[520px]:text-2xl max-[520px]:w-full">
							MAN 2 Model Medan
						</h1>
						<p className="text-gray-400 font-semibold text-xl max-[520px]:text-lg">
							Natural Sciences
						</p>
					</div>
				</div>

				<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center relative">
					<div className="bg-linear-to-r from-emerald-400 to-teal-500 w-8 h-8 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-emerald-400/40 max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full min-[520px]:hidden"></div>
					<div className="text-end max-[520px]:text-start max-[520px]:w-60">
						<h4 className="text-emerald-400 font-semibold text-lg max-[520px]:text-base">
							2017 - 2020
						</h4>
						<h1 className="font-bold text-3xl max-[520px]:text-2xl">
							SMP Muhammadiyah 1 Medan
						</h1>
						<p className="text-gray-400 font-semibold text-xl max-[520px]:text-lg">
							General Studies
						</p>
					</div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-b-full max-[520px]:hidden"></div>
					<div className="max-[520px]:hidden"></div>
				</div>
			</div>
			{/* MOBILE VIEW */}
			<div className="flex flex-col gap-10 w-full max-w-md mx-auto min-[520px]:hidden pt-24">
				{journeys.map((item, index) => (
					<div key={index} className="relative pl-10">
						{/* Line */}
						<div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-emerald-400 to-teal-500"></div>

						{/* Dot */}
						<div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 shadow-md shadow-emerald-400/40"></div>

						{/* Content */}
						<div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4">
							<h4 className="text-emerald-400 font-semibold text-sm">
								{item.year}
							</h4>
							<h1 className="font-bold text-lg mt-1">{item.title}</h1>
							<p className="text-gray-400 text-sm">{item.major}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Journey;
