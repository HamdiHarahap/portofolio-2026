const DetailLayouts = (props) => {
	const { children } = props;

	return (
		<section className="min-h-screen pb-24  bg-linear-to-br from-[#020617] via-[#0B1120] to-[#020617] w-full">
			<div className="text-white px-36">{children}</div>
		</section>
	);
};

export default DetailLayouts;
