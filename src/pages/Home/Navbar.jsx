import { useState, useEffect, useRef } from 'react';
//, useRef, useLayoutEffect
import { HiMenu, HiX, HiOutlineBadgeCheck } from 'react-icons/hi';
import PropTypes from 'prop-types';
//import styled from '@emotion/styled';

const Navbar = ({ onMeasure, handleOpenNavbar }) => {
	const [activeSection, setActiveSection] = useState('');

	const navbarRef = useRef(null);

	useEffect(() => {
		const height = navbarRef.current.getBoundingClientRect().height || 68;
		onMeasure(height);
		console.log(height);
	}, []);

	//estado para manejar cuando esta abierto el navbar (mobile)
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		handleOpenNavbar(setOpen(!open));
	};

	// When you click on an anchor (when in mobile mode), the menu will close after that
	const closeDropDown = () => handleOpenNavbar(setOpen(false));

	const links = [
		{
			label: 'Home',
			route: 'header',
		},
		{
			label: 'About',
			route: 'about',
		},
		{
			label: 'Projects',
			route: 'projects',
		},
		{
			label: 'Contact',
			route: 'contact',
		},
	];

	//
	const handleNavLinkClick = (event, route) => {
		event.preventDefault();
		setActiveSection(route);
		closeDropDown();

		const section = document.getElementById(route);
		section.scrollIntoView({ behavior: 'smooth' });
	};
	//

	/*
	const H3Styled = styled.h3`
		
	`;
	*/
	return (
		<nav
			ref={navbarRef}
			className={`bg-black text-white p-3 w-full sticky top-0 z-50 md:flex md:content-center md:justify-evenly md:py-2`}
		>
			<div className="w-full flex justify-between content-center  text-lg py-2 md:w-full md:py-3">
				<h3 className="text-blue w-full flex space-x-1">
					<span className="">JPRP</span>
					<HiOutlineBadgeCheck className="h-auto w-5" />
				</h3>

				<button onClick={handleOpen} className="text-blue text-2xl md:hidden">
					{open === false ? <HiMenu /> : <HiX />}
				</button>
			</div>
			<div className="flex content-center justify-center pr-3">
				{open === false ? (
					<ul
						className={`py-3 content-center hidden md:inline md:w-full md:justify-between md:space-x-5`}
					>
						{links.map(({ label, route }) => (
							<li
								key={route}
								className={`py-1  md:inline  ${
									activeSection === route
										? 'text-pink border-b-pink border-solid border-b-2'
										: 'text-blue'
								}`}
							>
								<a
									href={`#${route}`}
									onClick={(event) => handleNavLinkClick(event, route)}
									className="w-full inline"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				) : (
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
									onClick={(event) => handleNavLinkClick(event, route)}
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	handleOpenNavbar: PropTypes.func.isRequired,
	onMeasure: PropTypes.func.isRequired,
};

export default Navbar;

/*
	// I added this because when you click on an anchor, I need that section to be below the navbar
	const ADDITIONAL_SCROLL = 150;

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

/*
	//para saber la altura del navbar
	const navbarRef = useRef(null);

	useLayoutEffect(() => {
		const handleNavbarHeight = () => {
			const navbarHeight = navbarRef.current.offsetHeight;
			setNavbarHeight(navbarHeight);
			console.log('altura navbar ' + navbarHeight);
		};

		handleNavbarHeight();

		window.addEventListener('resize', handleNavbarHeight);

		return () => {
			window.removeEventListener('resize', handleNavbarHeight);
		};
	}),
		[navbarRef];
	*/