import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Contact = ({ NAVBAR_HEIGHT }) => {
	const Contact = styled.section`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		border-width: 1px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
	`;

	return <Contact id="contact" className="border-blue border-solid "></Contact>;
};

Contact.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Contact;
