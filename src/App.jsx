import MainLayout from './ui/layouts';
import About from './ui/pages/About';
import Contact from './ui/pages/Contact';
import Home from './ui/pages/Home';
import Journey from './ui/pages/Journey';
import Portfolio from './ui/pages/Portfolio';

const App = () => {
	return (
		<MainLayout>
			<Home />
			<About />
			<Journey />
			<Portfolio />
			<Contact />
		</MainLayout>
	);
};

export default App;
