import PropTypes from 'prop-types';

const Header = ({ NAVBAR_HEIGHT }) => {
	return (
		<header
			id="header"
			className={`min-h-screen flex items-center justify-center flex-col space-y-5 font-extrabold overflow-hidden `}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<section className="animate-jump-in animate-once animate-duration-500">
				<h2 className=" flex flex-col flex-wrap content-center justify-center text-center text-4xl w-auto h-auto max-w-6xl md:text-5xl lg:text-6xl md:mx-auto uppercase 0 ">
					<span
						className="md:pr-4 text-5xl text-blue"
						
					>
						Hey! I am{' '}
					</span>
					<span
						className=""
						
					>
						Juan Pablo Roldan Patiño
					</span>
				</h2>
				<p
					className="mt-3 text-pink text-3xl text-center mx-auto lg:text-4xl"
					
				>
					Software Developer
				</p>
				<footer className="flex  md:flex-row items-center justify-center py-5 space-x-4">
					<a
						className="text-blue hover:opacity-75 hover:scale-95"
						href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-brand-linkedin w-8 h-8 md:w-10 md:h-10"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
							<path d="M8 11l0 5" />
							<path d="M8 8l0 .01" />
							<path d="M12 16l0 -5" />
							<path d="M16 16v-3a2 2 0 0 0 -4 0" />
						</svg>
					</a>
					<a
						href="https://github.com/JuanPabloRP"
						className="text-pink hover:opacity-75 hover:scale-95"
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-brand-github w-8 h-8 md:w-10 md:h-10"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
						</svg>
					</a>

					<a
						className="text-white hover:opacity-75 hover:scale-95"
						href="assets/pdf/Hoja de vida Juan Pablo Roldan Patiño.pdf"
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-file-cv w-8 h-8 md:w-10 md:h-10 "
							width="24"
							height="24"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M14 3v4a1 1 0 0 0 1 1h4" />
							<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
							<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
							<path d="M13 11l1.5 6l1.5 -6" />
						</svg>
					</a>
				</footer>
			</section>

			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-arrow-down animate-bounce animate-infinite animate-duration-500 animate-delay-0"
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
				<path d="M12 5l0 14" />
				<path d="M18 13l-6 6" />
				<path d="M6 13l6 6" />
			</svg> */}
		</header>
	);
};

Header.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Header;
