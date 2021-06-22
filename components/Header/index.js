import styles from "./index.module.css";
import {useState} from "react";


export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const navToggle = () => {
    setShowNavMenu(!showNavMenu)
  }
  
  const navItems = ["Nosotros", "Historia", "Donar", "Contacto"]

  const listItems = navItems.map((item, index) => (
    <li key={`item-${index}`} className={styles.menu_item}>
      <a className={styles.menu_item_a} 
        href={ item==="Donar"? `/${item}`: null } 
      > 
        {item}
      </a>
    </li>
  ))


  return (
    <header className={styles.container}>
      <nav className={styles.nav}>

        <div className={styles.nav_mobile}>
          <a href="/" className={styles.logo_a}>
            <img className={styles.logo_img}
              src="/images/coop_logo_2.png"
              alt="Asociacion Cooperadora Lucio Melendez logo"
            />
          </a>
          <div className={styles.nav_toggle} onClick={navToggle}>
            <span className={styles.bar1}/>
            <span className={styles.bar2}/>
            <span className={styles.bar3}/>
          </div>
        </div>

        <div id="nav_menu_wrapper" 
          className={styles.nav_menu_wrapper} 
          style={
            showNavMenu ?
              {"left": 0} : 
              null
            }
        >
          <div
            className={styles.nav_mobile_close_button}
            style={
              showNavMenu ? 
                {"display": "block"} : 
                {"display": "none"}
              }
            onClick={()=>setShowNavMenu(false)}
          >✕</div>

          <div className={styles.logo_wraper}>
            <a href="/" className={styles.logo_a}>
              <img className={styles.logo_img}
                src="/images/coop_logo_2.png"
                alt="Asociacion Cooperadora Lucio Melendez logo"
              />
            </a>
          </div>
            <ul id="main_menu" className={styles.main_menu}>
              {listItems}
            </ul>


        </div>
      </nav>
    </header>
  );
}
