import { useState } from 'react';
import Navbar from './Navbar';
import HeaderStyled from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [NAVBAR_HEIGHT, setNavbarHeight] = useState(0);

	const handleOpenNavbar = () => setOpenNavbar(!openNavbar);

	const handleNavbarHeight = (height) => setNavbarHeight(height);

	/* useEffect(() => {
		console.log('Home ' + NAVBAR_HEIGHT);
	}); */

	/*
	const handleNavLinkClick = (e) => {
		e.preventDefault();
		const targetId = e.target.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		targetElement.scrollIntoView({ behavior: 'smooth' });
	};
	*/

	return (
		<div className="bg-black text-white">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				toastClassName="bg-black border border-pink rounded-md p-2"
				progressClassName="bg-pink"
			/>

			<Navbar
				onMeasure={handleNavbarHeight}
				handleOpenNavbar={handleOpenNavbar}
			/>

			<main className={``}>
				
				<HeaderStyled NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<About NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<Projects NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<Contact NAVBAR_HEIGHT={NAVBAR_HEIGHT} />
			</main>
		</div>
	);
};

export default Home;
