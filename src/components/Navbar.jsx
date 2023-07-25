import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiOutlineBadgeCheck } from 'react-icons/hi';
import { NavLink, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const Navbar = ({ onMeasure }) => {
	const navbarRef = useRef(null);

	//DO NOT add a dependency, just [] because this only needs to run the first time
	useEffect(() => {
		const height = navbarRef?.current?.getBoundingClientRect()?.height || 68;
		onMeasure(height);
		console.log(height);
		//console.log(height);
	}, []);
	//estado para manejar cuando esta abierto el navbar (mobile)
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	// When you click on an anchor (when in mobile mode), the menu will close after that
	const closeDropDown = () => handleOpen(setOpen(false));

	const links = [
		{
			label: 'Home',
			route: '',
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

	return (
		<nav
			ref={navbarRef}
			className="box-border bg-black text-white p-3 w-full sticky top-0 z-50 md:flex md:justify-evenly md:content-center md:p-2"
		>
			<div className="nav__leftContainer w-full flex justify-between content-center  text-lg py-2 md:w-full md:py-3">
				<Link to="/" className="text-blue flex space-x-1">
					<span className="">Juan Pablo</span>
					<HiOutlineBadgeCheck className="h-auto w-5" />
				</Link>

				<button onClick={handleOpen} className="text-blue text-2xl md:hidden">
					{open === false ? <HiMenu /> : <HiX />}
				</button>
			</div>

			<div className="nav__right flex content-center justify-center pr-3">
				{open === false ? (
					<ul
						className={`py-3 content-center hidden md:inline md:w-full md:justify-between md:space-x-5`}
					>
						{links.map(({ label, route }) => (
							<li key={route} className={`py-1 md:inline `}>
								<NavLink
									to={`${route}`}
									className={({ isActive }) =>
										isActive
											? 'text-pink border-b-pink border-solid border-b-2'
											: 'text-blue'
									}
									onClick={() => closeDropDown()}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				) : (
					<ul
						className={`py-3 flex text-center content-center flex-wrap flex-col md:inline md:w-full md:justify-between md:space-x-5`}
					>
						{links.map(({ label, route }) => (
							<li key={route} className={`py-1 md:inline `}>
								<NavLink
									to={`${route}`}
									className={({ isActive }) =>
										isActive
											? 'text-pink border-b-pink border-solid border-b-2'
											: 'text-blue'
									}
									onClick={() => closeDropDown()}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

/* Navbar.propTypes = {
	handleOpenNavbar: PropTypes.func.isRequired,
	onMeasure: PropTypes.func.isRequired,
};
 */
export default Navbar;

/*
	{open === false ? (
					<ul
						className={`py-3 content-center hidden md:inline md:w-full md:justify-between md:space-x-5`}
					>
						{links.map(({ label, route }) => (
							<li key={route} className={`py-1 md:inline `}>
								<NavLink
									to={`${route}`}
									className={({ isActive }) =>
										isActive
											? 'text-pink border-b-pink border-solid border-b-2'
											: 'text-blue'
									}
									onClick={() => closeDropDown()}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				) : (
					<ul
						className={`py-3 flex text-center content-center flex-wrap flex-col md:inline md:w-full md:justify-between md:space-x-5`}
					>
						{links.map(({ label, route }) => (
							<li key={route} className={`py-1 md:inline `}>
								<NavLink
									to={`${route}`}
									className={({ isActive }) =>
										isActive
											? 'text-pink border-b-pink border-solid border-b-2'
											: 'text-blue'
									}
									onClick={() => closeDropDown()}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				)}
 */
