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
];
