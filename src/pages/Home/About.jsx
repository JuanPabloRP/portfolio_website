//import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const About = ({ NAVBAR_HEIGHT }) => {
	const About = styled.section`
		box-sizing: border-box;
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
		height: fit-content;

		& article {
			box-shadow: inset 0px 0px 7px 0px #fb2576, 0px 0px 7px 0px #fb2576;
		}

		& h2 {
			color: white;
			text-shadow: 0 0 3px #000, 0 0 7px #fb2576, 0 0 10px #fb2576;
		}
	`;

	return (
		<About
			id="about"
			className="flex justify-center items-start py-3 md:items-center "
		>
			<article className="border-white border-solid border-[1px] rounded-md mx-2  p-3 max-w-4xl md:p-20">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide">
					About me
				</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
					maiores qui illo, aspernatur, corporis perspiciatis eius harum,
					accusamus voluptate doloribus quidem! Aut, obcaecati earum nesciunt
					exercitationem alias ut beatae reiciendis. Nihil, doloribus. Ea ipsa,
					veniam atque, consequatur dolore autem nihil, quaerat corrupti ipsam
					maxime eaque. Non impedit eveniet, odit corporis voluptas possimus.
					Qui nihil laborum possimus illum facilis, deleniti dignissimos? Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores
					sapiente, eos voluptatem dolores reprehenderit. Odio dolores, enim
					tenetur suscipit nesciunt harum, incidunt, nostrum et cumque at ex
					aliquid sapiente?
				</p>
			</article>
		</About>
	);
};

About.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default About;
