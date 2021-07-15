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

      <div className={styles.quienes_container}>
        <section id="la_cooperadora" className={styles.la_cooperadora}>
            <h1>La Cooperadora</h1>
        </section>

        <section id="botones_donaciones" className={styles.botones_donaciones}>
          <p>La Asociación Cooperadora del hospital Lucio Melendez es una Asociación Civil sin fines de lucro 
            la cual se dedica a brindar cobertura a situaciones de los vecinos carentes de recursos,
            a la mejora constante de la infraestructura edilicia y a la adquisición de equipamiento
            a fin de brindar una mejor y más eficiente recuperación de la salud. 
            <br/>
            
          </p>
          
        </section>

{/* 
        <section id="contacto" className={styles.contacto}>

          <h3>
            PARA MÁS INFORMACIÓN CONTACTARSE A cooperadoraluciomelendez@gmail.com
          </h3>


        </section> */}

      </div>

      <Footer />
    </div>
    )
}