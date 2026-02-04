const Journey = () => {
	return (
		<section className="pb-20 flex flex-col">
			<div className="relative">
				<div className="absolute w-96 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<div className="absolute w-140 h-16 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<h1 className="text-6xl font-bold tracking-wide z-40 relative text-center">
					My Educational <br />{' '}
					<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
						Journey
					</span>
				</h1>
			</div>
			<div className="flex flex-col items-center max-[520px]:w-full pt-32">
				<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center relative">
					<div className="bg-linear-to-r from-emerald-400 to-teal-500 w-8 h-8 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-emerald-400/40 max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full min-[520px]:hidden"></div>
					<div className="text-end max-[520px]:text-start max-[520px]:w-60">
						<h4 className="text-emerald-400 font-semibold text-lg">
							2023 - 2027
						</h4>
						<h1 className="font-bold text-3xl rounded-t-md">
							Politeknik Negeri Medan
						</h1>
						<p className="text-gray-400 font-semibold text-xl">
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
						<h4 className="text-emerald-400 font-semibold text-lg">
							2020 - 2023
						</h4>
						<h1 className="font-bold text-3xl">MAN 2 Model Medan</h1>
						<p className="text-gray-400 font-semibold text-xl">
							Natural Sciences
						</p>
					</div>
				</div>

				<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center relative">
					<div className="bg-linear-to-r from-emerald-400 to-teal-500 w-8 h-8 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-emerald-400/40 max-[520px]:hidden"></div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-t-full min-[520px]:hidden"></div>
					<div className="text-end max-[520px]:text-start max-[520px]:w-60">
						<h4 className="text-emerald-400 font-semibold text-lg">
							2017 - 2020
						</h4>
						<h1 className="font-bold text-3xl">SMP Muhammadiyah 1 Medan</h1>
						<p className="text-gray-400 font-semibold text-xl">
							General Studies
						</p>
					</div>
					<div className="w-1 h-80 bg-linear-to-b from-emerald-400 to-teal-500 mx-auto rounded-b-full max-[520px]:hidden"></div>
					<div className="max-[520px]:hidden"></div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
