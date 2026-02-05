import Footer from '../components/fragments/Footer';
import Navbar from '../components/fragments/Navbar';

const MainLayout = (props) => {
	const { children } = props;

	return (
		<section className="min-h-screen pb-12 bg-linear-to-br from-[#020617] via-[#0B1120] to-[#020617]">
			<Navbar />
			<div className="text-white px-36 max-[520px]:px-4 max-[520px]:pt-32">
				{children}
			</div>
			<Footer />
		</section>
	);
};

export default MainLayout;
