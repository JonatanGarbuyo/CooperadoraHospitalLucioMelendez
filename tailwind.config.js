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
			},
			borderRadius: {
				10: '10px',
			},
		},
	},
	plugins: [],
}
