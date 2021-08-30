import Head from 'next/head'

import Footer from "../../components/Footer";
import Header from "../../components/Header"

import styles from "./index.module.css";

export default function Donar() {

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Cooperadora Lucio Melendez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.donar_container}>
        <section id="quiero_donar" className={styles.quiero_donar}>
          <div>
            <h1>Donar</h1>
            <a href="#botones_donaciones_wrapper" target="_self">
              <p>Quiero donar</p>
            </a>
          </div>
        </section>

        <section id="botones_donaciones" className={styles.botones_donaciones}>
          <p>Somos la Asociación Cooperadora del hospital Lucio Melendez.
            Esta pagina la creamos para acercarnos a la comunidad y mostrar lo que sus 
            colaboraciones pueden lograr.
            Entre todos podemos ayudar a nuestro querido hospital. 
            <br/>Por ello, tu aporte es muy importante para que podamos continuar 
            con nuestra misión como Institución.
          </p>
          <div id="botones_donaciones_wrapper" className={styles.botones_donaciones_wrapper}>
            <a href="https://mpago.la/2eRw8YF" target="_blank" style={{"background-color":"#4d95be;"}}>
              Donación por única vez
              <p>$500</p>
              quinientos pesos
            </a>  
            <a  href="https://mpago.la/2BFVwq7" target="_blank" style={{"background-color":"#0067a2;"}}>
              Donación por única vez
              <p>$1000</p>
              mil pesos
            </a>  
            <a  href="https://mpago.la/1sDpGAy" target="_blank" style={{"background-color":"#15b4b5;"}}>
              Donación por única vez
              <p>$3000</p>
              tres mil pesos
            </a>  
            <a  href="https://mpago.la/11TABB1" target="_blank" style={{"background-color":"#159b97;"}}>
              Donación por única vez
              <p>$5000</p>
              cinco mil pesos
            </a>
            <a href="mailto:cooperadoraluciomelendez@gmail.com" target="_blank" className={styles.mensual}>
              Donaciones por 
              <p>SUSCRIPCION MENSUAL</p>
            </a>
          </div>
        </section>

        <section id="contacto" className={styles.contacto}>
          <h3>
            PARA MÁS INFORMACIÓN CONTACTARSE A cooperadoraluciomelendez@gmail.com
          </h3>
        </section>

      </div>

      <Footer />
    </div>
    )
}