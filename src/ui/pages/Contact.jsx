import Button from '../components/elements/Button/Button';

const Contact = () => {
	return (
		<section
			id="contact"
			className="min-h-screen flex flex-col gap-12 items-center justify-center"
		>
			<div className="relative">
				<div className="absolute w-96 h-24 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<div className="absolute w-140 h-16 bg-linear-to-r from-emerald-400 to-teal-500 blur-3xl opacity-30 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
				<h1 className="text-6xl font-bold tracking-wide z-40 relative text-center">
					Get In{' '}
					<span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
						Touch
					</span>
				</h1>
			</div>
			<p className="text-gray-400 text-xl text-center max-w-2xl">
				I'm currently looking for any new opportunities, my inbox is always
				open. Whether you have a question or just want to say hi, I'll try my
				best to get back to you!
			</p>
			<a href="mailto:hamdiharahap2005@gmail.com">
				<Button>Say Hello!</Button>
			</a>
		</section>
	);
};

export default Contact;
