import React from 'react';
import { experiences } from '../data/experiences';
import Experience from './Experience';

const WorkExperiences = ({ NAVBAR_HEIGHT }) => {
	return (
		<main
			id="work-experiences"
			className={`min-h-screen flex justify-center items-start py-3 md:items-center `}
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<article className=" max-w-4xl mx-2 px-3 py-5 w-screen  ">
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
						className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
						<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
					</svg>
					<h2>Experiencia</h2>
				</header>
				<section className="mx-auto max-w-4xl">
					<ul className="flex flex-col gap-3 justify-center items-center">
						{experiences.map((experience, index) => (
							<Experience key={index} experience={experience} index={index} />
						))}
					</ul>
				</section>
			</article>
		</main>
	);
};

export default WorkExperiences;
