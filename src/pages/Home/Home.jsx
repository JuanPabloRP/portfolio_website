import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import About from '../../components/About';
import Projects from '../../components/Projects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WorkExperiences from '../../components/WorkExperiences';

const Home = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [NAVBAR_HEIGHT, setNavbarHeight] = useState(0);

	const handleOpenNavbar = () => setOpenNavbar(!openNavbar);

	const handleNavbarHeight = (height) => setNavbarHeight(height);

	return (
		<div className=" text-white bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
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
				openNavbar={openNavbar}
				setOpenNavbar={setOpenNavbar}
			/>

			<main className={`overflow-hidden `}>
				<Header NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<WorkExperiences NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<Projects NAVBAR_HEIGHT={NAVBAR_HEIGHT} />

				<About NAVBAR_HEIGHT={NAVBAR_HEIGHT} />
			</main>
		</div>
	);
};

export default Home;
