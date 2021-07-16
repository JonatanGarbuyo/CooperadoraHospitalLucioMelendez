import Head from 'next/head'

import Footer from "../../components/Footer";
import Header from "../../components/Header"

import styles from "./index.module.css";

export default function Donar() {

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Cooperadora Lucio Meléndez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.quienes_container}>
        <section id="titulo" className={styles.titulo}>
            <h1>La Cooperadora</h1>
        </section>

        <section id="la_cooperadora" className={styles.la_cooperadora}>
          <p>La Asociación Cooperadora del hospital Lucio Meléndez es una Asociación Civil sin fines de lucro 
            la cual se dedica a brindar cobertura a situaciones de los vecinos carentes de recursos,
            a la mejora constante de la infraestructura edilicia y a la adquisición de equipamiento
            a fin de brindar una mejor y más eficiente recuperación de la salud. 
            <br/>
            
          </p>
          
        </section>


        <section id="nosotros" className={styles.nosotros}>

          <h3>EL ÁREA DE INFRAESTRUCTURA EDILICIA</h3>
          <p>Nuestro Hospital fue fundado en el año 1902, aun mantiene parte del edificio original. Por lo tanto todos los años continuamos con las tareas destinadas a reparación, refacción, remodelación, 
            mantenimiento y reciclaje de varios Servicios y Salas de Internación.
            <br/>Colaboramos con  la compra de materiales varios para el Servicio de Mantenimiento y Depósito General del Hospital, 
            pagando materiales y mano de obra para la realización de dichas mejoras, a fin de brindar una mejor atención a nuestros 
            pacientes. Dichas tareas son de vital importancia para el normal desarrollo cotidiano de nuestro Hospital. 
            <br/>Esta Asociación compra, además, materiales eléctricos y para la construcción, herramientas, pintura y artículos 
            de pinturería, vidrios, hierros, cerraduras, artículos de sanitarios, repuestos, etc.
          </p>

          <h3>EL ÁREA HOSPITALARIA</h3>
          <p>Nuestra labor es la de proveer y/o reparar equipos e insumos para los distintos servicios de nuestro Hospital. 
            Se realizan permanentemente compras de equipos e instrumental nuevo: nebulizadores, colchones, estufas, paneles calefactores,
            tensiómetros, estetoscopios, laringoscopios, equipos de aire acondicionado, ventiladores, computadoras para distintos servicios, impresoras.
            Así como también insumos para distintos equipos: computadoras, termo tanques, lavarropas, bobinado de motores, 
            cartuchos y tonners para impresión, para la reparación de sillas de ruedas, de televisores, horno microondas, 
            muebles de oficina, sillas. 
            <br/>También hacemos grandes erogaciones de fondos para la compra de artículos de librería y papelería para abastecer a 
            los distintos servicios, como resmas de papel, libros de actas, fichas, biblioratos, carpetas, rollos de papel para 
            la ticketera de los turnos, fibrones, lapiceras, plasticolas, etc.
            Además, colaboramos también  con la compra de artículos de limpieza como toallas descartables, jabón liquido, 
            lavandina, detergente, trapos de piso, tachos de basura, contenedores de basura, bolsas de consorcio, cloro, 
            secadores, escobas, papel higiénico, etc. Para que nuestros compañeros del Servicio de Limpieza puedan dar una mejor higiene al hospital.
            <br/>Todos los meses tenemos un gasto fijo en artículos de ferretería que ayudan al normal funcionamiento del Servicio 
            de Mantenimiento. También se abona, cuando lo solicitan, el pago de combustible para los móviles del hospital.
            <br/>Por ultimo, a todos estos gastos hay que sumarle que por pedido de nuestra Dirección se abona aparte, 
            el servicio de Internet para el hospital y para la UPA N°5 de Longchamps que depende del Hospital Lucio Meléndez.
          </p>
            
          <h3>RESPECTO A NUESTRA FUNCIóN SOCIAL</h3>
          <p>Como desde hace mas de 20 años, a los pacientes carenciados que concurren a nuestro hospital se les abonan viáticos
            y traslados, se les da dinero para el transporte público o el pago del viaje en remís según su estado de salud; 
            y se les compran medicamentos que no puede abastecer la farmacia de nuestro Hospital. 
            También se les pagan estudios que no se realizan en el hospital, tanto a pacientes internados como ambulatorios. 
            Es nuestra forma de ayudar a los vecinos que mas nos necesitan.
            <br/>Se continúa dando en nuestras instalaciones el desayuno de todas las mañanas, que consta de una infusión caliente 
            y un alimento, para decenas de niños, mujeres embarazadas y ancianos que concurren a nuestro hospital para sacar turnos 
            o a hacerse atender, ayuda que se incremento considerablemente en los últimos años. 
            <br/>Se reciben donaciones de ropa de niños y adultos, ropa de cama, almohadas, juguetes, libros y objetos varios y 
            se entregan en las distintas salas, a los pacientes internados que necesiten.
          </p>

          <h3>¿Cómo lo hacemos posible todo esto?</h3>
          <p>Nuestra principal fuente de recursos son: La invalorable ayuda de los socios Adherentes y Activos que aportan una cuota 
            mensual, las Donaciones voluntarias tanto de dinero como de materiales de los vecinos, pacientes, comerciantes y 
            empresas de nuestra comunidad. Con la realización de campañas de recaudación a tal efecto, sumado el ingreso mensual 
            del alquiler del multikiosco de nuestro hospital.
            <br/>También recibimos ingresos mediante la venta de bonos contribución dentro del hospital y ahora hemos habilitado 
            una nueva cuenta de Mercado Pago, mediante la cual podemos recibir donaciones de forma virtual.
          </p>

          <h3>Agradecimientos</h3>
          <p>Queremos destacar que todo este accionar, esta expresado muy sintéticamente en los párrafos precedentes, 
            nuestra Asociación Cooperadora lo realiza sin ningún tipo de ayuda oficial. Y es el resultado del esfuerzo y 
            el trabajo cotidiano que llevamos adelante a diario. Esta Comisión Directiva es consciente de que hay que continuar 
            redoblando los esfuerzos y el trabajo serio, ya que la crisis que atravesamos afecta de manera muy dura a los que menos 
            tienen y son ellos los que mas nos necesitan. 
            <br/>Solo hay una forma de hacer frente a dichas dificultades, y es con la invalorable solidaridad de toda nuestra comunidad, 
            y con el incansable esfuerzo y sacrificio que hacen nuestros compañeros del Hospital Lucio Meléndez, que pese a 
            las dificultades diarias nunca dejan de brindarse al máximo para con el prójimo, y pese a todo nunca bajan los brazos. 
            <br/>Nuestros logros no serian posibles sin el trabajo en equipo que realizamos en conjunto con la Dirección de nuestro 
            Hospital, y principalmente del esfuerzo de los servicios de Mantenimiento, Limpieza y Depósito. <strong>¡A todos ellos 
            les decimos Muchas Gracias de Corazón!</strong>
          </p>
          <p>Por lo expresado anteriormente, analizando dificultades y logros, estamos conformes con nuestra labor, 
            pero no satisfechos. Estar al frente de nuestra querida Asociación Cooperadora y poder seguir ayudando a los que 
            mas nos necesitan es motivo de orgullo para todos nosotros, y nos compromete a futuro a seguir haciéndolo con 
            esfuerzo, Vocación de servicio, dedicación, Trabajo en equipo, responsabilidad con la que pensamos y hacemos las 
            actividades, y Transparencia en nuestra gestión.
            
          </p>
          <p id="firma"  className={styles.firma}>
              LA COMISIÓN DIRECTIVA
          </p>

        </section>

      </div>

      <Footer />
    </div>
    )
}