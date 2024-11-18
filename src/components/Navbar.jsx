import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onMeasure, handleOpenNavbar, openNavbar, setOpenNavbar }) => {
	const [activeSection, setActiveSection] = useState('');
	const navbarRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		const height = navbarRef?.current?.getBoundingClientRect()?.height || 78;
		onMeasure(height);
		setActiveSection((prev) => prev || 'header');
	}, []);

	const links = useMemo(
		() => [
			{
				label: 'Inicio',
				route: 'header',
				samePage: true,
			},
			{
				label: `Experiencia laboral`,
				route: 'work-experiences',
				samePage: true,
			},
			{
				label: 'Proyectos',
				route: 'projects',
				samePage: true,
			},
			{
				label: `Sobre mí`,
				route: 'about',
				samePage: true,
			},
			{
				label: 'Contáctame',
				route: 'mailto:jpabloroldanp@gmail.com',
				samePage: false,
			},
		],
		[]
	);

	const handleNavLinkClick = (event, route) => {
		event.preventDefault();

		handleOpenNavbar();
		if (route === 'header') return window.scrollTo(0, 0);
		const section = document.getElementById(route);
		section.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		const sections = links.map((link) => document.getElementById(link.route));

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: '0px',
			threshold: 0.3,
		});

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, [links]);

	return (
		<nav
			ref={navbarRef}
			className="max-w-xl mx-auto py-2 px-5 lg:py-0 lg:px-7 md:rounded-3xl text-white w-full sticky top-0 md:top-1 z-40 md:flex md:justify-evenly md:content-center backdrop-blur-3xl flex"
		>
			<section className="w-full flex justify-between items-end text-lg py-1 md:hidden">
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
				} absolute top-0 left-0 w-screen h-screen z-50 md:hidden  flex flex-col justify-center items-center text-2xl text-blue backdrop-filter backdrop-blur-3xl bg-opacity-95 bg-neutral-900`}
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
					{links.map(({ label, route, samePage }) => (
						<li
							key={route}
							className={`py-1 md:inline  ${
								activeSection === route
									? 'text-pink border-b-pink border-solid border-b-2'
									: 'text-blue'
							}
							`}
						>
							<a
								href={`${samePage ? `#${route}` : route}`}
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
			<section className="  pr-3">
				<ul
					className={`py-3 hidden md:flex items-center justify-center text-center w-full gap-x-5`}
				>
					{links.map(({ label, route, samePage }) => (
						<li
							key={route}
							className={`py-1 w-full flex   ${
								activeSection === route
									? 'text-pink border-b-pink border-solid border-b-2'
									: 'text-blue'
							}`}
						>
							<a
								href={`${samePage ? `#${route}` : route}`}
								// onClick={(e) => handleNavLinkClick(e, route)}
								className="w-full text-nowrap"
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
