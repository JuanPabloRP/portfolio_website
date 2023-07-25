import styled from '@emotion/styled';
import { projects } from '../../data/projects';
import Project from '../../components/Project';

const Projects = () => {
	const Projects = styled.section`
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
			<article className="border-white border-solid border-[1px] rounded-md px-3 py-5 w-screen max-w-4xl">
				<h2 className="text-4xl text-center font-black uppercase text-black p-5 tracking-wide ">
					Projects
				</h2>

				{projects.length !== 0 ? (
					<>
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
					</>
				) : (
					<div className="flex justify-center content-center h-20">
						<p className="text-3xl">Proximamente se añadiran proyectos...</p>
					</div>
				)}
			</article>
		</Projects>
	);
};

export default Projects;
