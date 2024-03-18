import PropTypes from 'prop-types';
import { projects } from '../../data/projects';
import Project from '../../components/Project';
import ProjectV4 from '../../components/ProjectV4';

const Projects = ({ NAVBAR_HEIGHT }) => {
	return (
		<main
			id="projects"
			className={`min-h-screen flex justify-center items-start py-3 md:items-center `}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<article
				className="mx-2 px-3 py-5 w-screen  "
				/* style={{ boxShadow: 'inset 0 0 7px 0 #00adb5, 0 0 7px 0 #00adb5' }} */
				/* border-white border-solid border-[1px] rounded-md max-w-5xl  */
			>
				<h2
					className="text-5xl lg:text-6xl text-center font-black uppercase text-white p-5 tracking-wide mb-5"
					style={{
						textShadow: '0 0 3px #000, 0 0 7px #00adb5, 0 0 10px #00adb5',
					}}
				>
					Projects
				</h2>

				{projects.length !== 0 ? (
					<>
						<ul className="flex flex-wrap justify-center items-center gap-7 ">
							{projects.map(({ id, image, name, tags, links }) => (
								<ProjectV4
									key={id}
									image={image}
									name={name}
									tags={tags}
									links={links}
								/>
							))}
						</ul>
					</>
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
