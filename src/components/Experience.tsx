import React from 'react';

interface ExperienceProps {
	experience: {
		id: string;
		jobTitle: string;
		company: string;
		date: string;
		tasksPerformed: string[];
		tags: { id: string; tag: string }[];
	};
	index: number;
}

/*
{
		id: nanoid(),
		//image: imgProjectGrabarPantalla,
		jobTitle: 'Desarrollador FullStack',
		company: 'RapiCredit',
		date: '2024 - Actualmente',
		tasksPerformed: [
			'Desarrollo de aplicaciones FrontEnd',
			'Desarrollo de aplicaciones BackEnd',
		],
		tags: [
			{ id: nanoid(), tag: 'Angular' },
			{ id: nanoid(), tag: 'SpringBoot' },
			{ id: nanoid(), tag: 'Quarkus' },
		],
	},
*/

const Experience = ({ experience, index }: ExperienceProps) => {
	return (
		<li
			key={index}
			className={`w-full  border border-[#fff]/20 p-6  backdrop-blur-sm rounded-md  transition-all duration-300 ${
				index % 2 === 0 ? 'hover:border-blue/30' : 'hover:border-pink/30'
			}`}
		>
			<div className="flex items-center mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-cpu"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
					<path d="M9 9h6v6h-6z" />
					<path d="M3 10h2" />
					<path d="M3 14h2" />
					<path d="M10 3v2" />
					<path d="M14 3v2" />
					<path d="M21 10h-2" />
					<path d="M21 14h-2" />
					<path d="M14 21v-2" />
					<path d="M10 21v-2" />
				</svg>
				<h3 className="pl-2 text-2xl font-bold text-white">
					{experience.jobTitle}
				</h3>
			</div>

			<div className="flex items-center mb-4 text-white/80">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-building"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M3 21l18 0" />
					<path d="M9 8l1 0" />
					<path d="M9 12l1 0" />
					<path d="M9 16l1 0" />
					<path d="M14 8l1 0" />
					<path d="M14 12l1 0" />
					<path d="M14 16l1 0" />
					<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
				</svg>
				<span className="pl-2 font-mono">{experience.company}</span>
			</div>

			<div className=" flex items-center mb-4 text-white/50">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="icon icon-tabler icons-tabler-filled icon-tabler-calendar"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" />
					<path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
				</svg>
				<span className="pl-2 font-mono">{experience.date}</span>
			</div>

			<ul className="mb-4 space-y-3">
				{experience.tasksPerformed.map((desc, i) => (
					<li key={i} className="text-gray-300 flex items-start font-light">
						<span
							className={`mr-2 ${i % 2 === 0 ? 'text-blue' : 'text-pink'} `}
						>
							&gt;
						</span>
						{desc}
					</li>
				))}
			</ul>

			<div className="flex flex-wrap gap-2">
				{experience.tags.map((tech, i) => (
					<span
						key={i}
						className={`px-3 py-1 text-sm  text-blue hover:text-pink rounded-md border border-blue/30 hover:border-pink/50 transition-colors duration-300 cursor-pointer font-mono`}
					>
						{tech.tag}
					</span>
				))}
			</div>
		</li>
	);
};

export default Experience;
