import PropTypes from 'prop-types';
import { projects } from '../data/projects';
//import Project from './Project';
import Project from './ProjectV4';

const Projects = ({ NAVBAR_HEIGHT }) => {
	return (
		<main
			id="projects"
			className={`min-h-screen flex justify-center items-start py-3 md:items-center `}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<article
				className=" max-w-4xl mx-2 px-3 py-5 w-screen  "
				/* style={{ boxShadow: 'inset 0 0 7px 0 #00adb5, 0 0 7px 0 #00adb5' }} */
				/* border-white border-solid border-[1px] rounded-md max-w-5xl  */
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
						className="icon icon-tabler icons-tabler-outline icon-tabler-folder"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
					</svg>
					<h2
						className=" "
						/* style={{
						textShadow: '0 0 3px #000, 0 0 7px #00adb5, 0 0 10px #00adb5',
					}} */
					>
						Proyectos
					</h2>
				</header>

				{projects.length !== 0 ? (
					<section className="mx-auto max-w-4xl">
						{/* "flex flex-wrap justify-center items-center gap-7 " */}
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
							{projects.map(({ id, image, name, description, tags, link }) => (
								<Project
									key={id}
									image={image}
									name={name}
									tags={tags}
									link={link}
									description={description}
								/>
							))}
						</ul>
					</section>
				) : (
					<div className="flex justify-center content-center h-20">
						<p className="text-3xl">Proximamente se añadiran proyectos...</p>
					</div>
				)}
			</article>
		</main>
	);
};

Projects.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Projects;
