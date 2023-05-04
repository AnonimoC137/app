import React from 'react'
import styles from "./Main.module.css"
import { BallTriangle } from 'react-loader-spinner'
import foto1 from '../img/naruto-pequeno.jpg';
import foto2 from '../img/sasuke-pequeno.webp';
import punho from '../img/punho2.png';
import raio from '../img/raio4.png';
import escudo from '../img/escudo5.png';
import Personagens from './Personagens';
import Titulo from './Titulo';

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
    id: 2,
    id2: 'c',
    punho: '../img/punho2.png',
    forca: 60,
    raio: '../img/raio4.png',
    velocidade: 80,
    escudo: '../img/escudo5.png',
    defesa: 150,
  }
  
]

const Main = () => {
  const [mudar, setMudar] = React.useState(personagens);
  const [mudar2, setMudar2] = React.useState(personagens);
  const [ativa, setAtiva] = React.useState(true)
  const [ativa2, setAtiva2 ] = React.useState(true)
  
    function handleClick() {
      
      if(ativa) {
        setMudar(
          mudar[0].img = mudar[0].img2,
          mudar[0].forca = 100,
          mudar[0].texto =  mudar[0].texto2,
         
        )
        setAtiva(false)
        
      }
      console.log(ativa)
      return null
    }

    function handleClick2() {
      
      if(ativa2) {
        setMudar2(
          mudar2[1].img = mudar2[1].img2,
          mudar2[1].forca = 100,
          mudar2[1].texto =  mudar2[1].texto2,
        )
        setAtiva2(false)
      } 
      
      return null
    }

  
  return (
    <div>
        <Titulo/>
        <Personagens 
          nome={personagens[0].nome} 
          texto={personagens[0].texto}
          img={personagens[0].img}
          forca={personagens[0].forca}
          velocidade={personagens[0].velocidade}
          defesa={personagens[0].defesa}
        />
        <button
            className={styles.buttonTransformar}
            onClick={handleClick}>Transformar
            <BallTriangle
                  height={50}
                  width={50}
                  radius={2}
                  color="#fff"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
               /> 
          </button>
          <Personagens 
              nome={personagens[1].nome} 
              texto={personagens[1].texto}
              img={personagens[1].img}
              forca={personagens[1].forca}
              velocidade={personagens[1].velocidade}
              defesa={personagens[1].defesa}
           />
           <button
            className={styles.buttonTransformar}
            onClick={handleClick2}>Transformar
            <BallTriangle
                  height={50}
                  width={50}
                  radius={2}
                  color="#fff"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
               /> 
          </button>    
    </div>
   
  )
}

export default Main
