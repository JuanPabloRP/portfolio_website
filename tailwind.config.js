import tailwindcssAnimated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/styles/*.{css,scss,sass}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#00ADB5',
				pink: '#FB2576',
			},
			animation: {
				meteor: 'meteor 5s linear infinite',
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0,
					},
				},
			},
		},
		fontFamily: {},
	},
	plugins: [tailwindcssAnimated],
	extend: {
		textShadow: {
			sm: '0 1px 2px var(--tw-shadow-color)',
			DEFAULT: '0 2px 4px var(--tw-shadow-color)',
			lg: '0 8px 16px var(--tw-shadow-color)',
		},
	},
};
