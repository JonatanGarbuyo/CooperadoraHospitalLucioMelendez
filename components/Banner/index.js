import Image from 'next/image'

import SocialShare from '../SocialShare'
import styles from './index.module.css'

export default function Banner() {
  return (
    <section className={styles.container}>
      <div id="banner_ayudemos" className={styles.banner}>
        <p>Ayudemos a los que nos cuidan!</p>
      </div>

      <p id="donacion_voluntaria" className={styles.text}>
        Hacé hoy una DONACION VOLUNTARIA para colaborar con la compra de
        materiales para esta pandemia.
      </p>

      <div id="aporte_fundamental" className={styles.aporte}>
        <p>¡Tu aporte es fundamental!</p>
      </div>

      <p id="podes" className={styles.text}>
        Podés hacerlo mediante una transferencia o deposito a:{' '}
      </p>

      <div id="datos_bancarios" className={styles.banner_bank}>
        <div>
          <p>
            CUENTA CTE. BANCO PROVINCIA: <strong>5029-6693/6</strong>
          </p>
          <p>
            TITULAR:{' '}
            <strong>Asociacion Cooperadora Htal. Lucio Melendez</strong>
          </p>
          <p>
            CBU: <strong>0140082301502900669363</strong>
          </p>
          {/* <p>CVU: <strong>0000003100057315699140</strong></p> */}
          {/* <p>ALIAS: <strong>coop.lucio.melendez</strong></p> */}
          {/* <p>ALIAS: <strong>asoc.coop.melendez</strong></p> */}
          <p>
            ALIAS: <strong>coop.hosp.melendez</strong>
          </p>
          <p>
            CUIT: <strong>33-67621770-9</strong>
          </p>
        </div>
      </div>

      <div id="mercadopago" className={styles.mercadopago_wrapper}>
        <div className={styles.mercadopago_logo_wrapper}>
          <p>
            Tambien podés donar desde tu telefono escaneando el código QR
            mediante
          </p>
          <Image
            id="mercadopago_logo"
            src="/images/mercadopago_logo.webp"
            alt="mercadopago logo"
            width={250}
            height={80}
          />
        </div>
        <Image
          className={styles.mercadopago_qr}
          src="/images/mercadopago-qr.webp"
          alt="mercadopago qr"
          width={400}
          height={400}
        />
      </div>

      <div className={styles.consultas}>
        <a
          href="mailto:cooperadoraluciomelendez@gmail.com?
          subject=Consulta%20desde%20la%20pagina"
        >
          <p>Consultas: cooperadoraluciomelendez@gmail.com</p>
        </a>
      </div>

      <SocialShare />
    </section>
  )
}
