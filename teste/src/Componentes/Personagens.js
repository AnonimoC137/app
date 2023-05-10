import React from 'react'
import styles from "./Main.module.css"
import punho from '../img/punho2.png';
import raio from '../img/raio4.png';
import escudo from '../img/escudo5.png';




const Personagens = ({nome, img, texto, forca, velocidade, defesa}) => {
  return (
    
       <div className={styles.container}>
            <div className={styles.content} >
              <h1 className={styles.nomePersonagem}>{nome}</h1>
              <div className={styles.campoImg}>
                  <img className={styles.imgPersonagem} src={img} />
                  <p className={styles.texto}>{texto}</p>
                  <div className={styles.contentEmoji}>
                    <img className={styles.punho} src={punho}alt="forca" title='forca' />
                    <span className={styles.spanForca}>Força:{forca} </span>
                    <img className={styles.raio} src={raio} alt="raio" title='raio' />
                    <span className={styles.spanRaio}>Rapidez:{velocidade} </span>
                    <img className={styles.escudo} src={escudo} alt="raio" title='raio' />
                    <span className={styles.spanEscudo}>Defesa:{defesa} </span>
                    
                  </div>
                  
              </div>
              
            </div>
     
         
        
    </div>
   
  )
}

export default Personagens
