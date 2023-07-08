
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#00ADB5',
				pink: '#FB2576',
			},
		},
		fontFamily: {},
	},
	plugins: [import('flowbite/plugin')],
};
