import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
	const [navbar_height, setNavbarHeight] = useState(0);

	const handleNavbarHeight = (height) => setNavbarHeight(height);

	return (
		<>
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
			<Navbar onMeasure={handleNavbarHeight} />
			<main
				className="flex flex-wrap justify-center items-center w-full"
				style={{
					minHeight: `calc(100vh - ${navbar_height}px)`,
					minHeight: `calc(100dvh - ${navbar_height}px)`,
				}}
			>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
