import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderStyled = ({ NAVBAR_HEIGHT }) => {
	const Header = styled.header`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
		font-weight: 800;

		& h2 {
			text-transform: uppercase;
			color: #000;
			text-shadow: 0 0 30px #00adb5;

			& span:last-child {
				color: white;
			}
		}

		& p {
			display: block;
			font-family: monospace;
			white-space: nowrap;
			border-right: 4px solid;
			width: 17ch;
			text-shadow: 0 0 30px #fb2576;
			animation: typing 2s steps(17), blink 0.5s infinite step-end alternate;
			overflow: hidden;
			text-align: center;
		}

		@keyframes typing {
			from {
				width: 0;
			}
		}

		@keyframes blink {
			50% {
				border-color: transparent;
			}
		}
	`;

	return (
		<Header
			id="header"
			className=" flex content-center justify-center flex-col space-y-5"
		>
			<h2 className="flex flex-wrap content-center justify-center text-center text-4xl w-auto h-auto md:text-5xl lg:text-6xl">
				<span className="md:pr-4">Hey! I am </span>
				<span>Juan Pablo Roldan Patiño</span>
			</h2>
			<p className="text-pink text-3xl text-center mx-auto lg:text-4xl">
				Sofware Developer
			</p>
		</Header>
	);
};

HeaderStyled.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default HeaderStyled;
