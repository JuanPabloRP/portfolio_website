import ContactForm from '../../components/contactForm';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
//BsFillFileEarmarkTextFill,

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
			<article className="border-white border-solid border-[1px] rounded-md mx-2 p-3 w-screen max-w-4xl ">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide">
					Contact me
				</h2>

				<ContactForm />

				<div className="flex  md:flex-row items-center justify-center py-5 space-x-4">
					<a
						className="hover:text-gray-400"
						href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin className="w-7 h-7" />
					</a>
					<a
						href="https://github.com/JuanPabloRP"
						className="hover:text-gray-400"
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub className="w-7 h-7" />
					</a>

					<a
						className="hover:text-gray-400"
						href="https://wa.link/1kjv96"
						target="_blank"
						rel="noreferrer"
					>
						<BsWhatsapp className="w-7 h-7" />
					</a>
				</div>
			</article>
		</Contact>
	);
};

Contact.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Contact;
