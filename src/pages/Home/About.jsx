import styled from '@emotion/styled';
import hello from '../../assets/svg/hello.svg';

const About = () => {
	const About = styled.section`
		box-sizing: border-box;

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
			<article className="border-white border-solid border-[1px] rounded-md mx-2  p-3 max-w-4xl md:p-14 lg:p-20">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide">
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
		</About>
	);
};

export default About;
