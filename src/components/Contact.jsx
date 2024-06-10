import ContactForm from './ContactForm';
import PropTypes from 'prop-types';

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
			<article
				className="border-white border-solid border-[1px] rounded-md mx-2  px-3 py-5 w-screen max-w-4xl md:py-24 "
				style={{ boxShadow: ' inset 0 0 7px 0 #fff, 0 0 7px 0 #fff' }}
			>
				<h2
					className="text-4xl text-center font-black uppercase text-white p-5 tracking-wide md:pb-12 "
					style={{ textShadow: '0 0 3px #000, 0 0 7px #fff, 0 0 10px #fff' }}
				>
					Contact me
				</h2>

				<ContactForm />
			</article>
		</main>
	);
};

Contact.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Contact;
