import { nanoid } from 'nanoid';
import imgProjectPortfolio from '../assets/img/imgProjectPortfolio.webp';
import imgFilantropiaEafit from '../assets/img/imgFilantropiaEafit.webp';
import imgCrudLogin from '../assets/img/imgCrudLogin.webp';
import imgGestionProjectBack from '../assets/img/imgGestionProjectBack.webp';
import imgGestionProyectos from '../assets/img/imgGestionProyectos.webp';
import imgProjectCiclo3 from '../assets/img/imgProjectCiclo3.webp';
import imgBackendEafitCode from '../assets/img/imgBackendEafitCode.webp';

export const projects = [
	{
		id: nanoid(),
		image: imgBackendEafitCode,
		name: 'Backend Proyecto Sura',
		tags: [
			{ id: nanoid(), tag: 'JavaScript' },
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'Java' },
			{ id: nanoid(), tag: 'Spring' },
			{ id: nanoid(), tag: 'Python' },
			{ id: nanoid(), tag: 'More...' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/JuanPabloRP/eafit-backend',
			},
		],
	},
	{
		id: nanoid(),
		image: imgProjectPortfolio,
		name: 'Portfolio Web',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'Emotion' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Website',
				link: '#',
			},
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/JuanPabloRP/portfolio_website',
			},
		],
	},
	{
		id: nanoid(),
		image: imgFilantropiaEafit,
		name: 'Filantropia EAFIT',
		tags: [
			{ id: nanoid(), tag: 'Next JS' },
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Sass' },
			{ id: nanoid(), tag: 'Bootstrap' },
		],
		links: [
			/* {
				id: nanoid(),
				name: 'web',
				link: '#',
			}, */
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/nodo-eafit-frontend/gamma-equipo-2',
			},
		],
	},
	{
		id: nanoid(),
		image: imgCrudLogin,
		name: 'CRUD Login',
		tags: [
			{ id: nanoid(), tag: 'C#' },
			{ id: nanoid(), tag: 'Windows Forms' },
			{ id: nanoid(), tag: 'SQLite' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/JaimeJaner/P_FINAL_CRUD-LOGIN_H_P_2',
			},
		],
	},
	{
		id: nanoid(),
		image: imgGestionProjectBack,
		name: 'Gestión de proyectos backend',
		tags: [
			{ id: nanoid(), tag: 'Node js' },
			{ id: nanoid(), tag: 'Express' },
			{ id: nanoid(), tag: 'GraphQL' },
			{ id: nanoid(), tag: 'Mongo DB' },
			{ id: nanoid(), tag: 'TypeScript' },
			{ id: nanoid(), tag: 'Apollo' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/Devtambulos/GestionProyectos-Back',
			},
		],
	},
	{
		id: nanoid(),
		image: imgGestionProyectos,
		name: 'Gestión de proyectos',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'JWT' },
			{ id: nanoid(), tag: 'Material IU' },
			{ id: nanoid(), tag: 'Apollo' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/Devtambulos/GestionProyectosInvestigacion',
			},
		],
	},
	{
		id: nanoid(),
		image: imgProjectCiclo3,
		name: 'Muestra de productos',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Bootstrap' },
			{ id: nanoid(), tag: 'ApiRest' },
			{ id: nanoid(), tag: 'Axios' },
		],
		links: [
			{
				id: nanoid(),
				name: 'Code',
				link: 'https://github.com/CuriDevs/project-ciclo3',
			},
		],
	},
];
