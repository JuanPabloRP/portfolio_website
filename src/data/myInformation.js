import { nanoid } from 'nanoid';
import imgFilantropiaEafit from '../assets/img/imgFilantropiaEafit.webp';
import imgProjectSura from '../assets/img/imgProjectSura.webp';
import imgProjectScoreFlix from '../assets/img/imgProjectScoreFlix.webp';
import imgProjectGrabarPantalla from '../assets/img/imgProjectGrabarPantalla.webp';
import aboutMeImage from '../assets/svg/hello.svg';

export const myInformation = {
	es: {
		name: 'Juan Pablo Roldán',
		role: [
			'Desarrollador de Software',
			'Desarrollador Frontend',
			'Desarrollador Backend',
		],
		about: [
			'Soy un desarrollador de software, interesado en adquirir experiencia laboral. Cuento con conocimientos en lenguajes de programación como JavaScript, C#, Python y Java, además de dominar lenguajes de marcado y consulta como HTML, CSS y SQL. Hago uso de librerías y frameworks avanzados como ReactJS, .NET, SpringBoot, TailwindCSS y Bootstrap.',
			'Además, tengo experiencia en el manejo de bases de datos SQL como MySQL, SQL Server y PostgreSQL, así como en bases de datos NoSQL como MongoDB.',
			'Actualmente, estoy cursando la Tecnología en Desarrollo de Software y he participado en reconocidos bootcamps, diplomados y cursos en Colombia, como lo son Misión TIC y NODO EAFIT, donde he tenido la oportunidad de realizar proyectos empresariales para EAFIT y Suramericana.',
		],
		aboutMeImage: aboutMeImage,
		contact: {
			email: 'jpabloroldanp@gmail.com',
			location: 'Medellín, Colombia',
		},
		social: {
			linkedin: 'https://www.linkedin.com/in/juan-pablo-roldan-patino/',
			github: 'https://github.com/JuanPabloRP',
		},
		skills: [
			{ id: nanoid(), skill: 'JavaScript' },
			{ id: nanoid(), skill: 'React' },
			{ id: nanoid(), skill: 'Node JS' },
			{ id: nanoid(), skill: 'Express' },
			{ id: nanoid(), skill: 'MongoDB' },
			{ id: nanoid(), skill: 'Java' },
			{ id: nanoid(), skill: 'Spring' },
			{ id: nanoid(), skill: 'MySQL' },
			{ id: nanoid(), skill: 'PostgreSQL' },
			{ id: nanoid(), skill: 'Git' },
			{ id: nanoid(), skill: 'Docker' },
			{ id: nanoid(), skill: 'Tailwind' },
			{ id: nanoid(), skill: 'Bootstrap' },
		],
		projects: [
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
		],
	},
};
