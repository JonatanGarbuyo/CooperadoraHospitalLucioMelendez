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
            <a href="" style={{"background-color":"#4d95be;"}}>
              Donación por única vez
              <p>$500</p>
              quinientos pesos
            </a>  
            <a  href="" style={{"background-color":"#0067a2;"}}>
              Donación por única vez
              <p>$1000</p>
              mil pesos
            </a>  
            <a  href="" style={{"background-color":"#15b4b5;"}}>
              Donación por única vez
              <p>$3000</p>
              tres mil pesos
            </a>  
            <a  href="" style={{"background-color":"#159b97;"}}>
              Donación por única vez
              <p>$5000</p>
              cinco mil pesos
            </a>
            <a  href="" className={styles.mensual}>
              Donaciones por 
              <p>SUSCRIPCION MENSUAL</p>
            </a>
          </div>
        </section>

        <section id="contacto" className={styles.contacto}>

          <h3>
            PARA MÁS INFORMACIÓN CONTACTARSE A cooperadoraluciomelendez@gmail.com
          </h3>


          {/* <h1>Contacto</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" id="name" name="name" 
                placeholder="Ingresa tu nombre" autocomplete="on" size="50" required></input>
              <svg className={styles.svg_icon} viewBox="0 0 20 20">
                <path fill="none" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"></path>
						  </svg>
            </div>

            <div>
              <input type="email" id="email" name="email" 
                placeholder="Tu correo electronico" autocomplete="on" required></input>
              <svg className={styles.svg_icon} viewBox="0 0 20 20">
							<path fill="none" d="M19.291,3.026c0.002-0.15-0.053-0.301-0.167-0.415c-0.122-0.122-0.286-0.172-0.444-0.161H1.196
								c-0.16-0.011-0.322,0.039-0.444,0.161C0.637,2.725,0.583,2.875,0.585,3.026c0,0.003-0.002,0.006-0.002,0.009v14.032
								c0,0.322,0.262,0.584,0.585,0.584h17.54c0.322,0,0.584-0.262,0.584-0.584V3.035C19.292,3.032,19.291,3.029,19.291,3.026z
								 M17.147,3.619l-7.21,6.251L2.728,3.619H17.147z M18.122,15.896c0,0.323-0.261,0.584-0.584,0.584H2.337
								c-0.323,0-0.585-0.261-0.585-0.584V4.292l7.732,6.704c0.013,0.017,0.019,0.035,0.034,0.052c0.115,0.114,0.268,0.169,0.419,0.166
								c0.151,0.003,0.304-0.052,0.419-0.166c0.015-0.017,0.021-0.035,0.034-0.052l7.731-6.704V15.896z"></path>
						  </svg>
            </div>

            <div className={styles.consulta}>
              <textarea id="consulta" name="consulta" 
                placeholder="Dejanos tu consulta" 
                rows="10" cols="40" ></textarea>
              <svg className={styles.svg_icon} viewBox="0 0 20 20">
							<path fill="none" d="M12.871,9.337H7.377c-0.304,0-0.549,0.246-0.549,0.549c0,0.303,0.246,0.55,0.549,0.55h5.494
								c0.305,0,0.551-0.247,0.551-0.55C13.422,9.583,13.176,9.337,12.871,9.337z M15.07,6.04H5.179c-0.304,0-0.549,0.246-0.549,0.55
								c0,0.303,0.246,0.549,0.549,0.549h9.891c0.303,0,0.549-0.247,0.549-0.549C15.619,6.286,15.373,6.04,15.07,6.04z M17.268,1.645
								H2.981c-0.911,0-1.648,0.738-1.648,1.648v10.988c0,0.912,0.738,1.648,1.648,1.648h4.938l2.205,2.205l2.206-2.205h4.938
								c0.91,0,1.648-0.736,1.648-1.648V3.293C18.916,2.382,18.178,1.645,17.268,1.645z M17.816,13.732c0,0.607-0.492,1.1-1.098,1.1
								h-4.939l-1.655,1.654l-1.656-1.654H3.531c-0.607,0-1.099-0.492-1.099-1.1v-9.89c0-0.607,0.492-1.099,1.099-1.099h13.188
								c0.605,0,1.098,0.492,1.098,1.099V13.732z"></path>
						  </svg>
            </div>

            <div>
              <input className={styles.submit} type="submit" value="Enviar"></input>
            </div>

            <div>
              <p id="confirmation" className={styles.confirmation} 
              style={
                isConsultaSent ?
                {display: "inline-block"}:
                null
              }>
                Muchas gracias. Recibimos su mensaje y responderemos en breve.</p>
            </div>
          </form> */}

        </section>

      </div>

      <Footer />
    </div>
    )
}