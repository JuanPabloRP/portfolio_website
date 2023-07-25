import styled from '@emotion/styled';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { DARK_COLOR } from '../../styles/style';

const Home = () => {
	const Header = styled.header`
		& h2 {
			text-transform: uppercase;
			color: ${DARK_COLOR};
			text-shadow: 0 0 5px #00adb5, 0 0 10px #00adb5;

			& span {
				color: white;
				animation: changecolor 2s steps(17);
			}

			@keyframes changecolor {
				from {
					color: ${DARK_COLOR};
					text-shadow: 0 0 3px #00adb5, 0 0 7px #fb2576;
				}

				to {
					text-shadow: 0 0 3px #fb2576, 0 0 7px #00adb5;
					color: #fff;
				}
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
			className=" flex items-center justify-center flex-col space-y-5 font-extrabold"
		>
			<h2 className=" flex flex-wrap content-center justify-center text-center text-4xl w-auto h-auto max-w-6xl md:text-5xl lg:text-6xl md:mx-auto ">
				<span className="md:pr-4 ">Hey! I am </span>
				<span>Juan Pablo Roldan Patiño</span>
			</h2>
			<p className="text-pink text-3xl text-center mx-auto lg:text-4xl">
				Sofware Developer
			</p>

			<div className="flex  md:flex-row items-center justify-center py-5 space-x-4">
				<a
					className="text-blue hover:opacity-75 hover:scale-95"
					href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin className="w-8 h-8 md:w-9 md:h-9" />
				</a>
				<a
					href="https://github.com/JuanPabloRP"
					className="text-pink hover:opacity-75 hover:scale-95"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub className="w-8 h-8 md:w-9 md:h-9" />
				</a>

				<a
					className="text-white hover:opacity-75 hover:scale-95"
					href="https://wa.link/1kjv96"
					target="_blank"
					rel="noreferrer"
				>
					<BsWhatsapp className="w-8 h-8 md:w-9 md:h-9" />
				</a>
			</div>
		</Header>
	);
};

export default Home;
