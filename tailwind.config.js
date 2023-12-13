/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1CABE2',
				secondary: '#1E6DA2',
				accent: '#E33254',
				primaryTone: '#E7EFFF',
				black: '#1E2A34',
				gray: '#4A4A4A',
			},
			borderRadius: {
				10: '10px',
			},
		},
	},
	plugins: [],
}
