import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.content}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={styles.li}>
            <button className={styles.buttonNav}>Sobre</button>
            <button className={styles.buttonNav}>Contatos</button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
