import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onMeasure, handleOpenNavbar, openNavbar, setOpenNavbar }) => {
	const [activeSection, setActiveSection] = useState('');
	const navbarRef = useRef(null);

	//DO NOT add a dependency, just [] because this only needs to run the first time
	useEffect(() => {
		window.scrollTo(0, 0);
		const height = navbarRef?.current?.getBoundingClientRect()?.height || 68;
		onMeasure(height);
		console.log(height);
		//console.log(navbarRef?.current?.getBoundingClientRect()?.height);
		setActiveSection((prev) => prev || 'header');
	}, []);

	const links = [
		{
			label: 'Home',
			route: 'header',
		},
		{
			label: 'Projects',
			route: 'projects',
		},
		{
			label: 'About',
			route: 'about',
		},
		{
			label: 'Contact',
			route: 'contact',
		},
	];

	const handleNavLinkClick = (event, route) => {
		event.preventDefault();
		setActiveSection(route);
		handleOpenNavbar();
		if (route === 'header') return window.scrollTo(0, 0);
		const section = document.getElementById(route);
		section.scrollIntoView({ behavior: 'smooth' });
	};

	/* 
	// I added this because when you click on an anchor, I need that section to be below the navbar
	const ADDITIONAL_SCROLL = 69;
	useEffect(() => {
		const handleScroll = () => {
			const headerSection = document.getElementById('header');
			const aboutSection = document.getElementById('about');
			const projectsSection = document.getElementById('projects');
			const contactSection = document.getElementById('contact');

			const scrollPosition = window.scrollY;

			if (
				(scrollPosition >= headerSection.offsetTop || scrollPosition >= 0) &&
				scrollPosition + ADDITIONAL_SCROLL < aboutSection.offsetTop
			) {
				setActiveSection('header');
			} else if (
				scrollPosition + ADDITIONAL_SCROLL >= aboutSection.offsetTop &&
				scrollPosition + ADDITIONAL_SCROLL < projectsSection.offsetTop
			) {
				setActiveSection('about');
			} else if (
				scrollPosition + ADDITIONAL_SCROLL >= projectsSection.offsetTop &&
				scrollPosition + ADDITIONAL_SCROLL < contactSection.offsetTop
			) {
				setActiveSection('projects');
			} else if (
				scrollPosition + ADDITIONAL_SCROLL >=
				contactSection.offsetTop
			) {
				setActiveSection('contact');
			} else {
				setActiveSection('');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
 */

	return (
		<nav
			ref={navbarRef}
			className="max-w-5xl mx-auto py-3 px-5 md:rounded-md box-border  text-white  w-full sticky top-0 md:top-5 z-40 md:flex md:justify-evenly md:content-center backdrop-blur-xl"
		>
			<section className="w-full flex justify-between content-center text-lg py-2 md:w-full md:py-3">
				<h3 className="text-blue w-full flex space-x-1">
					<span className="">JPRP&apos;s Portfolio</span>
				</h3>

				<button
					onClick={handleOpenNavbar}
					className="text-blue text-2xl md:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-menu-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6l16 0" />
						<path d="M4 12l16 0" />
						<path d="M4 18l16 0" />
					</svg>
				</button>
			</section>

			{/* Menu for small devices */}
			<section
				className={`${
					openNavbar ? 'block' : 'hidden'
				} absolute top-0 left-0 w-screen h-screen z-50 md:hidden dark:bg-black flex flex-col justify-center items-center text-2xl text-blue`}
			>
				<button onClick={() => handleOpenNavbar()}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-x"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M18 6l-12 12" />
						<path d="M6 6l12 12" />
					</svg>
				</button>
				<ul
					className={`py-3 flex text-center content-center flex-wrap flex-col md:inline md:w-full md:justify-between md:space-x-5`}
				>
					{links.map(({ label, route }) => (
						<li
							key={route}
							className={`py-1 md:inline  ${
								activeSection === route
									? 'text-pink border-b-pink border-solid border-b-2'
									: 'text-blue'
							}`}
						>
							<a
								href={`#${route}`}
								onClick={(e) => handleNavLinkClick(e, route)}
								className="w-full inline"
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</section>

			{/* Menu for bigger devices */}
			<section className=" flex content-center justify-center pr-3">
				<ul
					className={`py-3 hidden text-center content-center md:inline w-full space-x-5`}
				>
					{links.map(({ label, route }) => (
						<li
							key={route}
							className={`py-1 md:inline  ${
								activeSection === route
									? 'text-pink border-b-pink border-solid border-b-2'
									: 'text-blue'
							}`}
						>
							<a
								href={`#${route}`}
								onClick={(e) => handleNavLinkClick(e, route)}
								className="w-full inline"
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</section>
		</nav>
	);
};

Navbar.propTypes = {
	handleOpenNavbar: PropTypes.func.isRequired,
	onMeasure: PropTypes.func.isRequired,
	openNavbar: PropTypes.bool.isRequired,
	setOpenNavbar: PropTypes.func.isRequired,
};

export default Navbar;
