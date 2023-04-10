import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <div>
      <h1 classname={styles.h1}>Novo Produto</h1>
      <p className={styles.text}>Esse é o novo produto...</p>
      <button className={styles.button}>Comprar</button>
    </div>
  )
}

export default Produto
