import React from 'react'
import styles from "./Main.module.css"
import { BallTriangle } from 'react-loader-spinner'
import foto1 from '../img/naruto-pequeno.jpg';
import foto2 from '../img/sasuke-pequeno.webp';
import punho from '../img/punho2.png';
import raio from '../img/raio4.png';
import escudo from '../img/escudo5.png';


const personagens = [
  {
    nome: 'Naruto Classico',
    img: '../img/naruto-pequeno.jpg',
    img2: '../img/naruto-transformado2.webp',
    texto: 'O naruto quando nasceu rescebeu o espirito da raposa demonia de nova causas.',
    texto2: 'Naruto ganha um manto protetor da raposa de nove caudas, aumentando muito seu poder e sua velocidade',
    id: 1,
    id2: 'a',
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
  const [ativa, setAtiva] = React.useState(false)
  
  function handleClick({id}) {
    setAtiva(true)
    if (ativa)
    if(id === 1){
      setAtiva(!true)
      setMudar(
        mudar[0].img = mudar[0].img2,
        mudar[0].forca = 100,
        mudar[0].texto =  mudar[0].texto2
      )
      setMudar(personagens)
      

    } else if(id === 2){
      setAtiva(!true)
      setMudar(
        mudar[1].img = mudar[1].img2,
        mudar[1].forca = 100,
        mudar[1].texto =  mudar[1].texto2
      )
      setMudar(personagens)
      
    } else if(id === 3) {
      setAtiva(!true)
      setMudar(
        mudar[2].img = mudar[2].img2,
        mudar[2].forca = 100,
        mudar[2].texto =  mudar[2].texto2
      )
      setMudar(personagens)
      
      
    }

    console.log(personagens)
    
     
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>A historia de cada personagem de Naruto</h1>
        {personagens.map(({nome, texto, img, id, punho, forca, raio,velocidade,escudo,defesa, id2 }) => (
            <div className={styles.content} key={id}>
              <h1 className={styles.nomePersonagem}>{nome}</h1>
              <div className={styles.campoImg}>
                  <img className={styles.imgPersonagem} src={img} />
                  <p className={styles.texto}>{texto}</p>
                  <div className={styles.contentEmoji}>
                    <img className={styles.punho} src={punho} alt="forca" title='forca' />
                    <span className={styles.spanForca}>Força:{forca} </span>
                    <img className={styles.raio} src={raio} alt="raio" title='raio' />
                    <span className={styles.spanRaio}>rapidez:{velocidade} </span>
                    <img className={styles.escudo} src={escudo} alt="raio" title='raio' />
                    <span className={styles.spanEscudo}>Defesa:{defesa} </span>
                    
                  </div>
                  
              </div>
              <button
                      
                      className={styles.buttonTransformar}onClick=   {() => handleClick({id})}>Transformar Todos 
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
        ))}
         
        
    </div>
  )
}

export default Main
