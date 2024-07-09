import { Baloo_2 as Baloo2 } from 'next/font/google'
import MainHeader from '@/components/MainHeader'
import './main.css'
import MainFooter from '@/components/MainFooter'

export const metadata = {
	title: 'Cooperadora Lucio Meléndez',
	description:
		'Somos la Asociación Cooperadora del hospital Lucio Meléndez. Esta página la creamos para acercarnos a la comunidad y mostrar lo que sus colaboraciones pueden lograr. Entre todos podemos ayudar a nuestro querido hospital. Por ello, tu aporte es muy importante para que podamos continuar con nuestra misión como Institución.',
}

const baloo = Baloo2({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={baloo.className}>
			<body className="min-w-[320px]">
				<MainHeader />
				{children}
				<MainFooter />
			</body>
		</html>
	)
}
