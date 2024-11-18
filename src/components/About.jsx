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
				className=" rounded-md mx-2  p-3 max-w-5xl md:p-14 lg:p-20 "
				/* style={{ boxShadow: 'inset 0 0 7px 0 #fb2576,0 0 7px 0 #fb2576' }} */
			>
				<header className="flex items-center gap-5 text-3xl text-center font-bold text-white  mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-user-check"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
						<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
						<path d="M15 19l2 2l4 -4" />
					</svg>
					<h2
						className=""
						/* style={{
						textShadow: '0 0 3px #000, 0 0 7px #fb2576, 0 0 10px #fb2576',
					}} */
					>
						Sobre mí
					</h2>
				</header>
				<div className="flex flex-col justify-center items-center lg:flex-row ">
					<section className="flex flex-col gap-2 text-pretty">
						<p>
							<span>Soy</span>{' '}
							<strong className="text-pink/70">
								
								desarrollador de software FullStack{' '}
							</strong>
							{''}
							<span>
								con sólida experiencia en lenguajes de programación como
							</span>{' '}
							<strong className="text-pink/70">
								JavaScript, Java, C# y Python.
							</strong>{' '}
							<span>Además, domino lenguajes de marcado y consulta como</span>{' '}
							<strong className="text-pink/70">HTML, CSS y SQL.</strong>{' '}
							<span>
								Trabajo con librerías y frameworks avanzados, incluyendo
							</span>{' '}
							<strong className="text-pink/70">
								ReactJS, Angular, .NET, Spring Boot, Quarkus, TailwindCSS y
								Bootstrap.
							</strong>
						</p>
						<p>
							Tengo experiencia en la gestión de bases de datos SQL como{' '}
							<strong className="text-pink/70">
								MySQL, SQL Server y PostgreSQL,{' '}
							</strong>
							así como en bases de datos NoSQL como{' '}
							<strong className="text-pink/70">MongoDB </strong>, lo que me
							permite abordar proyectos con diferentes requerimientos
							tecnológicos.
						</p>
						<p>
							Actualmente, estoy cursando la{' '}
							<strong className="text-pink/70">Ingeniería de Software </strong>{' '}
							<span>
								y soy{' '}
								<strong className="text-pink/70">
									graduado en la Tecnología en Desarrollo de Software.{' '}
								</strong>
								He participado en reconocidos programas de formación en
								Colombia, como Misión TIC y NODO EAFIT, donde{' '}
								<strong className="text-pink/70">
									he desarrollado proyectos empresariales
								</strong>{' '}
								para organizaciones como{' '}
								<strong className="text-pink/70">EAFIT</strong> y{' '}
								<strong className="text-pink/70">Suramericana.</strong>
							</span>
						</p>
					</section>
					<img
						src={hello}
						alt="Hello image"
						className="max-w-md w-56 p-2 md:mr-4"
					/>
				</div>
			</article>
		</main>
	);
};
/*
   



 

*/

About.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default About;
