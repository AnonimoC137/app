import React from 'react'
import styles from "./Main.module.css"
import foto from '../img/naruto-pequeno.jpg';

const Main = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>A historia de cada personagem de Naruto</h1>
        <div className={styles.content}>
            <h1 className={styles.nomePersonagem}>Naruto-Classico</h1>
            <div className={styles.campoImg}>
                <img className={styles.narutoPequeno} src={foto} />
                <p className={styles.texto}>O naruto quando nasceu rescebeu o espirito da raposa demonia de nova causas.</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Main
