import React from 'react'
import styles from "./Section.module.css"

import foto1 from '../img/naruto-pequeno.jpg';
import foto2 from '../img/sasuke-pequeno.webp';
import foto3 from '../img/kakashi-2.jpg'

const personagens = [
  {
    nome: 'Naruto Classico',
    img: '../img/naruto-pequeno.jpg',
    img2: '../img/naruto-transformado2.webp',
    texto: 'O naruto quando nasceu rescebeu o espirito da raposa demonia de nova causas.',
    texto2: 'Naruto ganha um manto protetor da raposa de nove caudas, aumentando muito seu poder e sua velocidade',
    id: 1,
    id2: 'a',
    v: true,
    f: false,
    punho: '../img/punho2.png',
    forca: 50,
    raio: '../img/raio4.png',
    velocidade: 100,
    escudo: '../img/escudo5.png',
    defesa: 80,
  },
  {
    nome: 'Sasuke Classico',
    img: '../img/sasuke-pequeno.webp',
    img2: '../img/sasuke-transformado.jpg',
    texto: 'O sasuke é o ultimo sobrevivente do massacre ao clã uchiha além de seu irmão itachi.',
    texto2: 'Sasuke obtem essa transformação após ser amaldiçoado por Orochimaru',
    id: 2,
    id2: 'b',
    v: true,
    f: false,
    punho: '../img/punho2.png',
    forca: 40,
    raio: '../img/raio4.png',
    velocidade: 120,
    escudo: '../img/escudo5.png',
    defesa: 95,
  },
  {
    nome: 'Kakashi Classico',
    img: '../img/kakashi-classico2.jpg',
    img2: '../img/kakashi-4.jpg',
    texto: 'Kakashi é um ninja de elite, possui o sharingan e tem mais de 1000 jutsus',
    texto2: 'quando Kakashi ativa seu mangekyo seus poderem aumentam muito, porem gasta seu chakra muito rapido',
    id: 3,
    id2: 'c',
    punho: '../img/punho2.png',
    forca: 60,
    raio: '../img/raio4.png',
    velocidade: 80,
    escudo: '../img/escudo5.png',
    defesa: 150,
  }
  
]

const Section = () => {
  const [personagem, setPersonagem] = React.useState(personagens)
  return (
    <div className={styles.container}>
      <div className={styles.content}> 
        <button className={styles.button}><img src={foto1}/></button>
      </div>
      <div className={styles.content}> 
        <button className={styles.button}><img src={foto2}/></button>
      </div>
      <div className={styles.content}> 
        <button className={styles.button}><img src={foto3}/></button>
      </div>
    </div>
  )
}

export default Section