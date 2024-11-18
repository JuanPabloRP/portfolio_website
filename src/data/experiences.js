import { nanoid } from 'nanoid';

export const experiences = [
	{
		id: nanoid(),
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
	{
		id: nanoid(),
		jobTitle: 'Desarrollador FullStack',
		company: 'Freelancer',
		date: '2022 - 2024',
		tasksPerformed: [
			'Desarrollo de aplicaciones FrontEnd',
			'Desarrollo de aplicaciones BackEnd',
			'Integración de aplicaciones',
		],
		tags: [
			{ id: nanoid(), tag: 'ReactJS' },
			{ id: nanoid(), tag: 'ExpressJS' },
			{ id: nanoid(), tag: 'MongoDB' },
			{ id: nanoid(), tag: 'MySQL' },
		],
	},
];
