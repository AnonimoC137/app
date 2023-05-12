import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const h1 = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink 
          activeClassName={styles.active} 
          className={styles.link} 
          to='/' 
          end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink 
          activeClassName={styles.active} 
          className={styles.link} 
          to='contato'
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default h1
