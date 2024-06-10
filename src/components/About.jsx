import PropTypes from 'prop-types';
import hello from '../assets/svg/hello.svg';

const About = ({ NAVBAR_HEIGHT }) => {
	return (
		<main
			id="about"
			className={`flex justify-center items-start py-3 md:items-center min-h-screen`}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<article
				className="border-white border-solid border-[1px] rounded-md mx-2  p-3 max-w-4xl md:p-14 lg:p-20 "
				style={{ boxShadow: 'inset 0 0 7px 0 #fb2576,0 0 7px 0 #fb2576' }}
			>
				<h2
					className="text-4xl text-center font-black uppercase text-white p-5 tracking-wide "
					style={{
						textShadow: '0 0 3px #000, 0 0 7px #fb2576, 0 0 10px #fb2576',
					}}
				>
					About me
				</h2>
				<div className="flex flex-col justify-center items-center lg:flex-row ">
					<img
						src={hello}
						alt="Hello image"
						className="max-w-xs w-56 p-2 md:mr-4"
					/>
					<p className="p-2">
						Juan Pablo Roldan Patiño is a software developer who lives in
						Medellín, interested in gaining work experience, he has knowledge in
						programming languages such as JavaScript, C# and Java, also in
						languages such as HTML, CSS and SQL. He studies “Tecnología en
						Desarrollo de Software (I.U. Pascual Bravo)”, and has participated
						in renowned bootcamps in Colombia such as “Misión TIC (Mintic y
						UdeA)” and “NODO (EAFIT)”. Among his skills that stand out the most
						we find teamwork, continuous learning and the achievement of
						objectives
					</p>
				</div>
			</article>
		</main>
	);
};

About.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default About;
