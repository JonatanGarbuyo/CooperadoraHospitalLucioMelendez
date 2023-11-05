import '../globals.css'

export const metadata = {
	title: 'Cooperadora Lucio Melendez',
	description:
		'Somos la Asociación Cooperadora del hospital Lucio Melendez. Esta pagina la creamos para acercarnos a la comunidad y mostrar lo que sus colaboraciones pueden lograr. Entre todos podemos ayudar a nuestro querido hospital. Por ello, tu aporte es muy importante para que podamos continuar con nuestra misión como Institución.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
