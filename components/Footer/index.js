import styles from "./index.module.css";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_info}>
        <div className={styles.contact_items_wrapper}>
            <a href="https://goo.gl/maps/ubQCGyqAjhgivnBA9">
              <img src="/icons/pin-map.svg" alt="Pinmap icon" className={styles.logo} />
              Pres. Juan Domingo Perón 859, B1846 Adrogué, Provincia de Buenos Aires
            </a>
            <a href="tel:+541142945555">
              <img src="/icons/telephone.svg" alt="Telephone icon" className={styles.logo} />
              +54 11-4294-5555 int 320
            </a>
            <a href="mailto:cooperadoraluciomelendez@gmail.com?subject=Consulta%20desde%20la%20pagina">
              <img src="/icons/envelope.svg" alt="Mail icon" className={styles.logo} />
              cooperadoraluciomelendez@gmail.com
            </a>
        </div>
        
        <a href="/" >
          <img className={styles.coop_logo}
            src="/images/coop_logo_2.png"
            alt="Asociacion Cooperadora Lucio Melendez logo"
          />
        </a>
      </div>
      
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/icons/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
    )
}