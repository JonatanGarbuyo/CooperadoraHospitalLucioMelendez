import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const navToggle = () => {
    setShowNavMenu(!showNavMenu)
  }

  const navItems = [
    'Home',
    'Nosotros',
    // "Historia",
    'Donar',
    'Contacto',
  ]

  const listItems = navItems.map((item, index) => (
    <li key={`item-${index}`} className={styles.menu_item}>
      <Link
        className={styles.menu_item_a}
        href={item === 'Home' ? '/' : `/${item}`}
      >
        {item}
      </Link>
    </li>
  ))

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav_mobile}>
          <Link className={styles.logo_a} href="/">
            <Image
              className={styles.logo_img}
              height="100"
              width="400"
              src="/images/coop_logo_2.png"
              alt="Asociacion Cooperadora Lucio Melendez logo"
            />
          </Link>
          <div className={styles.nav_toggle} onClick={navToggle}>
            <span className={styles.bar1} />
            <span className={styles.bar2} />
            <span className={styles.bar3} />
          </div>
        </div>

        <div
          id="nav_menu_wrapper"
          className={styles.nav_menu_wrapper}
          style={showNavMenu ? { left: 0 } : null}
        >
          <div
            className={styles.nav_mobile_close_button}
            style={showNavMenu ? { display: 'block' } : { display: 'none' }}
            onClick={() => setShowNavMenu(false)}
          >
            ✕
          </div>

          <div className={styles.logo_wraper}>
            <Link className={styles.logo_a} href="/">
              <img
                className={styles.logo_img}
                src="/images/coop_logo_2.png"
                alt="Asociacion Cooperadora Lucio Melendez logo"
              />
            </Link>
          </div>
          <ul id="main_menu" className={styles.main_menu}>
            {listItems}
          </ul>
        </div>
      </nav>
    </header>
  )
}
