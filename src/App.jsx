import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/Layout';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';
import Contact from './pages/Home/Contact';

function App() {
	return (
		<main className="">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
					</Route>

					<Route path="*" element={<p>Error, no existe esta pagina</p>} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
