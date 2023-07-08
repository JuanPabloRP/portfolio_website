import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { projects } from '../../data/projects';
import Project from '../../components/Project';

const Projects = ({ NAVBAR_HEIGHT }) => {
	const Projects = styled.section`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);

		& article {
			box-shadow: inset 0px 0px 7px 0px #00adb5, 0px 0px 7px 0px #00adb5;
		}

		& h2 {
			color: white;
			text-shadow: 0 0 3px #000, 0 0 7px #00adb5, 0 0 10px #00adb5;
		}
	`;

	return (
		<Projects
			id="projects"
			className="flex justify-center items-start py-3 md:items-center "
		>
			<article className="border-white border-solid border-[1px] rounded-md mx-2  p-3 max-w-4xl">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide">
					Projects
				</h2>
				<ul className="flex flex-wrap justify-center items-center">
					{projects.map(({ id, image, name, tags, links }) => (
						<Project
							key={id}
							image={image}
							name={name}
							tags={tags}
							links={links}
						/>
					))}
				</ul>
			</article>
		</Projects>
	);
};

Projects.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Projects;
