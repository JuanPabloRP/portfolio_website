import ContactForm from '../../components/ContactForm';
import styled from '@emotion/styled';

const Contact = () => {
	//estilos
	const Contact = styled.section`
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
			<article className="border-white border-solid border rounded-md md:mx-2  px-3 py-5 w-screen max-w-4xl md:py-24">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide md:pb-12">
					Contact me
				</h2>

				<ContactForm />
			</article>
		</Contact>
	);
};

export default Contact;
