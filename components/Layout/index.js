import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from './index.module.css'

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cooperadora Lucio Melendez</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="Author" content="Jonatan Garbuyo" />
				<meta
					name="description"
					content="Somos la Asociación Cooperadora del hospital Lucio Melendez. 
            Esta pagina la creamos para acercarnos a la comunidad y mostrar lo que sus 
            colaboraciones pueden lograr. 
            Entre todos podemos ayudar a nuestro querido hospital. 
            Por ello, tu aporte es muy importante para que podamos continuar 
            con nuestra misión como Institución."
				></meta>
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
