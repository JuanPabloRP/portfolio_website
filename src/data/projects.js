import { nanoid } from 'nanoid';
import imgFilantropiaEafit from '../assets/img/imgFilantropiaEafit.webp';
import imgProjectSura from '../assets/img/imgProjectSura.webp';
import imgProjectScoreFlix from '../assets/img/imgProjectScoreFlix.webp';
import imgProjectGrabarPantalla from '../assets/img/imgProjectGrabarPantalla.webp';

export const projects = [
	{
		id: nanoid(),
		image: imgProjectGrabarPantalla,
		name: 'Grabar pantalla',
		description:
			'Sitio web para grabar pantalla, audio y webcam. Se puede descargar el video grabado en formato webm.',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Tailwind' },
		],
		link: {
			id: nanoid(),
			name: 'Website',
			link: 'https://grabar-pantalla.vercel.app/',
		},
	},
	{
		id: nanoid(),
		image: imgProjectScoreFlix,
		name: 'ScoreFlix',
		description:
			'Plataforma para calificar y comentar películas y series. Se pueden ver las calificaciones de otros usuarios.',
		tags: [
			{ id: nanoid(), tag: 'React JS' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'Node JS' },
			{ id: nanoid(), tag: 'Express' },
			{ id: nanoid(), tag: 'MongoDB' },
		],
		link: {
			id: nanoid(),
			name: 'Website',
			link: 'https://score-flix.vercel.app/',
		},
	},
	{
		id: nanoid(),
		image: imgProjectSura,
		name: 'Prototipo para Sura',
		description:
			'Prototipo de aplicación web para Sura. Donde se guardaban alertas para predecir eventos futuros.',
		tags: [
			{ id: nanoid(), tag: 'React JS' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'Java' },
			{ id: nanoid(), tag: 'Spring' },
			{ id: nanoid(), tag: 'MongoDB' },
		],
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://github.com/JuanPabloRP/eafit-backend.git',
		},
	},
	/* {
		id: nanoid(),
		image: imgProjectPortfolio,
		name: 'Portfolio Web',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Tailwind' },
			{ id: nanoid(), tag: 'Emotion' },
		],
		link: [
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
	}, */
	{
		id: nanoid(),
		image: imgFilantropiaEafit,
		name: 'Filantropia EAFIT',
		description: 'Sitio web para la fundación Filantropía EAFIT.',
		tags: [
			{ id: nanoid(), tag: 'Next JS' },
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Sass' },
			{ id: nanoid(), tag: 'Bootstrap' },
		],
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://gamma-equipo-2.vercel.app/',
		},
	},
	/* {
		id: nanoid(),
		image: imgCrudLogin,
		name: 'CRUD Login',
		tags: [
			{ id: nanoid(), tag: 'C#' },
			{ id: nanoid(), tag: 'Windows Forms' },
			{ id: nanoid(), tag: 'SQLite' },
		],
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://github.com/JaimeJaner/P_FINAL_CRUD-LOGIN_H_P_2',
		},
	}, */
	/* {
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
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://github.com/Devtambulos/GestionProyectos-Back',
		},
	}, */
	/* {
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
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://github.com/Devtambulos/GestionProyectosInvestigacion',
		},
	}, */
	/* {
		id: nanoid(),
		image: imgProjectCiclo3,
		name: 'Muestra de productos',
		tags: [
			{ id: nanoid(), tag: 'React' },
			{ id: nanoid(), tag: 'Bootstrap' },
			{ id: nanoid(), tag: 'ApiRest' },
			{ id: nanoid(), tag: 'Axios' },
		],
		link: {
			id: nanoid(),
			name: 'Code',
			link: 'https://github.com/CuriDevs/project-ciclo3',
		},
	}, */
];
