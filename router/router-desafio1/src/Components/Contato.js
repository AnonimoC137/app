import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
    <Head/>
  
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Contato' description='Entre em contato'/>
      <img src={foto} alt="maquina de escrever"/>
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>coimbra.dev@gmail.com</li>
          <li>(047)984129911</li>
          <li>rua maria delfina de castro 234</li>
        </ul>
      </div>
      
    </section>
  )
}

export default Contato
