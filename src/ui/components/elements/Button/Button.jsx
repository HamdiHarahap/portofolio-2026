const Button = (props) => {
	const { children, variant = 'default', className, width = 'w-40' } = props;

	const baseClass =
		'font-semibold text-sm  py-3 rounded-lg transition duration-300 transform cursor-pointer justify-center';

	const variants = {
		default:
			'bg-linear-to-r from-emerald-400 to-teal-500 hover:scale-105 hover:bg-linear-to-r hover:from-teal-500 hover:to-emerald-400',
		primary: 'bg-black text-white hover:bg-emerald-400 hover:scale-105',
		secondary:
			'bg-transparent text-emerald-400 border border-emerald-400 hover:bg-emerald-400/20 hover:scale-105',
	};

	return (
		<button
			className={`${baseClass} ${variants[variant]} ${className} ${width}`}
		>
			{children}
		</button>
	);
};

export default Button;
