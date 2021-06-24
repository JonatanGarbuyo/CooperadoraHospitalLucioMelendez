import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cooperadora Lucio Melendez</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Author" content="Jonatan Garbuyo"/>
        <meta name="description" 
          content="Somos la Asociación Cooperadora del hospital Lucio Melendez. 
            Esta pagina la creamos para acercarnos a la comunidad y mostrar lo que sus 
            colaboraciones pueden lograr. 
            Entre todos podemos ayudar a nuestro querido hospital. 
            Por ello, tu aporte es muy importante para que podamos continuar 
            con nuestra misión como Institución."></meta>
      </Head>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}
