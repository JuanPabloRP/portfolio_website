import ContactForm from './ContactForm';
import PropTypes from 'prop-types';
import Dock, { DockIcon } from './Dock';
import CallToAction from './CallToAction';

const Contact = ({ NAVBAR_HEIGHT }) => {
	return (
		<main
			id="contact"
			className={`min-h-screen flex justify-center py-3 items-center`}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<article className=" mx-2  px-3 py-5 w-screen max-w-4xl md:py-24 ">
				<header className="flex items-center gap-5 text-3xl text-center font-bold text-white  mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
					</svg>
					<h2>Contáctame</h2>
				</header>

				{/* <CallToAction /> */}

				{/* <Dock>
					<DockIcon>
						<a
							className="text-white hover:opacity-90 hover:scale-95 w-full h-full
							flex justify-center items-center"
							href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-linkedin w-8 h-8 md:w-10 md:h-10"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
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
					</DockIcon>
					<DockIcon>
						<a
							href="https://github.com/JuanPabloRP"
							className="text-white hover:opacity-90 hover:scale-95 w-full h-full
							flex justify-center items-center"
							target="_blank"
							rel="noreferrer"
							aria-label="github"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-github w-8 h-8 md:w-10 md:h-10"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
							</svg>
						</a>
					</DockIcon>
					<DockIcon>
						<a
							className="text-white hover:opacity-90 hover:scale-95 w-full h-full
							flex justify-center items-center"
							href="assets/pdf/Hoja de vida Juan Pablo Roldan Patiño.pdf"
							target="_blank"
							rel="noreferrer"
							aria-label="cv"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-file-cv w-8 h-8 md:w-10 md:h-10 "
								width="16"
								height="16"
								strokeWidth="1.5"
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
					</DockIcon>
				</Dock> */}

				{/* <ContactForm /> */}
			</article>
		</main>
	);
};

Contact.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Contact;
