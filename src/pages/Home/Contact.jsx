import ContactForm from '../../components/contactForm';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Contact = ({ NAVBAR_HEIGHT }) => {
	//estilos
	const Contact = styled.section`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);

		& article {
			box-shadow: inset 0px 0px 7px 0px #fff, 0px 0px 7px 0px #fff;
		}

		& h2 {
			color: white;
			text-shadow: 0 0 3px #000, 0 0 7px #fff, 0 0 10px #fff;
		}
	`;

	return (
		<Contact id="contact" className="flex justify-center py-3 items-center">
			<article className="border-white border-solid border-[1px] rounded-md mx-2  px-3 py-5 w-screen max-w-4xl md:py-24">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide md:pb-12">
					Contact me
				</h2>

				<ContactForm />
			</article>
		</Contact>
	);
};

Contact.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Contact;
