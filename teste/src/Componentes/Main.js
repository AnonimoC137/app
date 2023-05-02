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
    texto: 'O naruto quando nasceu rescebeu o espirito da raposa demonia de nova causas.',
    texto2: 'Naruto ganha um manto protetor da raposa de nove caudas, aumentando muito seu poder e sua velocidade',
    id: 1,
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
    texto: 'O sasuke é o ultimo sobrevivente do massacre ao clã uchiha além de seu irmão itachi.',
    id: 2,
    punho: '../img/punho2.png',
    forca: 40,
    raio: '../img/raio4.png',
    velocidade: 120,
    escudo: '../img/escudo5.png',
    defesa: 95,
  }
  
]

const Main = () => {
  const [mudar, setMudar] = React.useState(personagens);
  const [ativa, setAtiva] = React.useState(true)
  
  function handleClick() {
    setAtiva(!true)
    if(ativa){
      setMudar(mudar[0].img = '../img/naruto-transformado2.webp', mudar[1].img = '../img/sasuke-transformado.jpg' )
      setMudar(mudar[0].forca = 100, mudar[1].forca = 110  )
      setMudar(mudar[0].texto =  mudar[0].texto2)
    }
    
     
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>A historia de cada personagem de Naruto</h1>
        {personagens.map(({nome, texto, img, id, punho, forca, raio,velocidade,escudo,defesa }) => (
            <div className={styles.content} key={id}>
              <h1 className={styles.nomePersonagem}>{nome}</h1>
              <button
                className={styles.buttonTransformar}onClick=   {handleClick}>Transformar Todos 
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
              
            </div>
        ))}
         
        
    </div>
  )
}

export default Main
