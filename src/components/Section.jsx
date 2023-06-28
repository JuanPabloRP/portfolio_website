import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SectionStyled = ({ SCROLL_MARGIN_TOP }) => {
	const SectionStyled = styled.section`
		scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
		border-width: 2px;
		height: calc(100vh - 80px);
		background: orange;
		color: black;
	`;

	return <SectionStyled></SectionStyled>;
};

SectionStyled.propTypes = {
	SCROLL_MARGIN_TOP: PropTypes.number.isRequired,
};

export default SectionStyled;
