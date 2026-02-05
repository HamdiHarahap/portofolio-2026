export default function GlassAvatar(props) {
	const { children } = props;

	return (
		<div className="relative group">
			<div className="w-80 h-80 max-[520px]:w-72 max-[520px]:h-72 group-hover:scale-105 transition-all duration-300">
				<div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 blur-2xl opacity-60 group-hover:opacity-90 transition duration-500" />
				<div className="relative w-full h-full rounded-full overflow-hidden bg-linear-to-r from-emerald-400 to-teal-500 p-0.75">
					<div className="relative w-full h-full rounded-full overflow-hidden bg-black/40 backdrop-blur-xl group-hover:rotate-6 transition">
						{children}
						<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
						<div className="pointer-events-none absolute -left-full top-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-full transition-all duration-700" />
					</div>
				</div>
			</div>
		</div>
	);
}
