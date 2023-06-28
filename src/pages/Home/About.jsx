//import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const About = ({ NAVBAR_HEIGHT }) => {
	const About = styled.section`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		border-width: 1px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
	`;

	return (
		<About id="about" className="border-blue border-solid ">
			<h2>About</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem maiores
				qui illo, aspernatur, corporis perspiciatis eius harum, accusamus
				voluptate doloribus quidem! Aut, obcaecati earum nesciunt exercitationem
				alias ut beatae reiciendis. Nihil, doloribus. Ea ipsa, veniam atque,
				consequatur dolore autem nihil, quaerat corrupti ipsam maxime eaque. Non
				impedit eveniet, odit corporis voluptas possimus. Qui nihil laborum
				possimus illum facilis, deleniti dignissimos?
			</p>
		</About>
	);
};

About.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default About;
