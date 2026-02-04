import Button from '../elements/Button/Button';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { image, title, description, id } = props;

	return (
		<div className="relative rounded-lg p-5 border border-white/10 bg-gray-900/70 backdrop-blur-xl overflow-hidden group hover:border-emerald-400 transition duration-300">
			<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-400/10 to-teal-500/10 opacity-60 group-hover:opacity-100 transition duration-500" />
			<div className="relative z-10 flex flex-col gap-4">
				<div className="w-full h-52 overflow-hidden rounded-md">
					<img
						src={image}
						className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
					/>
				</div>
				<h2 className="text-gray-200 font-semibold text-xl">{title}</h2>
				<p className="text-gray-400 text-sm">
					{description.slice(0, 120) + '...'}
				</p>

				<div className="ml-auto">
					<Link to={`/project/${id}`}>
						<Button width="w-26" variant="primary">
							Details
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
