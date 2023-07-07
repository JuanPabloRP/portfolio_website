import { useState } from 'react';
import Navbar from './Navbar';
import HeaderStyled from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const Home = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [NAVBAR_HEIGHT, setNavbarHeight] = useState(0);

	const handleOpenNavbar = () => setOpenNavbar(!openNavbar);

	const handleNavbarHeight = (height) => setNavbarHeight(height);

	/*
	useEffect(() => {
		console.log('Home ' + navbarHeight);
	});

	
	const handleNavLinkClick = (e) => {
		e.preventDefault();
		const targetId = e.target.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		targetElement.scrollIntoView({ behavior: 'smooth' });
	};
	*/

	return (
		<div className="bg-black text-white">
			<Navbar
				onMeasure={handleNavbarHeight}
				handleOpenNavbar={handleOpenNavbar}
			/>

			<main className={``}>
				<HeaderStyled NAVBAR_HEIGHT={NAVBAR_HEIGHT}></HeaderStyled>

				<About NAVBAR_HEIGHT={NAVBAR_HEIGHT}></About>

				<Projects NAVBAR_HEIGHT={NAVBAR_HEIGHT}></Projects>

				<Contact NAVBAR_HEIGHT={NAVBAR_HEIGHT}></Contact>
			</main>
		</div>
	);
};

export default Home;
