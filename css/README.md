# CSS componentes #

Ao importar um componente, os estilos importados do mesmo sao automaticamente adicionnados aos css final da build. Independente de voce utilizar o componente ou nao. 

# Conflito #

Todos os arquivos serao unidos em um CSS final e voce é responsavel por garantir que os seletores sejam especificos, para evitar conflito.

@exemplo
```bash
import Title from './Components/Title';
import Produtos from './Components/Produto';

const App = () => {
    return (
        <div>
            <Title texto="Meu titulo"/>
            <Produto />
        </div>
    );
}
```

# CSS module #

Os modules garantem que as classes utilizadas sejam sempre unicas, evitando o conflito. O modo já vem configurado com o create-react-app, basta definirmos o nome do arquivo css com a palavra .module EX: Produto.module.css Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes unicos para as classes.

@exemplo
```bash
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
```
### camelCase ###

Utilize camelCase "tituloPrincipal", já que o nome da classe se transformara em uma propriedade de um objeto JavaScript, Não utilize hifens "titulo-principal".

@exemplo
```bash
.tituloPrincipal {
    color: blue;
}
```
# Style Components #

Permite escrevermos o CSS diretamente no javascript. Ao inves de ckasses, criamos com um estilo unico.

@exemplo
```bash
import styled from 'styled-components'

const Ttile = styled.h1`
font-size: 1.5rem;
color: tomato;
`
const App = () => {
    return (
        <div>
            <Title>Titulo principal</Title>
        </div>
    );
}
```
### instalação ###

@exemplo
```bash
npm install styled-components

++ plugin do VScode

vscode-styled-components
```
### styled ###
O styled é um objeto com diferentes metodos que representam as tags de html.

@exemplo
```bash
const ProdutosContainer = styled.div`
    display: flex;
`
const Produto= styled.div`
    flex: 1;
`
const Titulo = styled.h1`
    font-size: 2rem;
`
```
### Props ###

Podemos passar propriedades  como em um componente de react.

@exemplo
```bash
const Preco= styled.p`
   background: ${(props) =>props.cor};
   color: white;
   display: inline-block;
   padding: 0.5rem
`
const App = () => {
return (
    <Preco cor="#53d956">R$2999</Preco>
);
}
```
### Estado ###
Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.

@exemplo
```bash
import styled from 'styled-components'

const Button = styled.button`
background: ${({ativo}) => (ativo ? '#53d956' : '#000')}
border: 1px solid black;
font-size: 1rem;
color: white;
cursor: pointer;
`

const App = () => {
    const [ativo, setAtivo] = React.useState(false);

    return (
        <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>R$3000</Button>
    );
}
```

### Pseudo elemento ###
Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando & na frente do elemento.

@exemplo
```bash
const Comprar = styled.button`
font-size: 1.5rem;
padding: 0.5rem;
cursor: pointer;
&:hover {
    background: black;
    color: white;
}
`
```

### Animações com css/react ###
Anime a entrada de elementos utilizando a propriedade "animation".

@exemplo - App.css
```bash
.animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;
}

@keyframes animeLeft {
    to {
        opacity: 1;
        transform: initial;
    }
}
```
* em nosso arquivo App.js e no Produtos.js vamos criar um button que vai mudar o estado de false para true, sempre que for true o conteudo vai aparecer na tela por conta de nossa condicional.

@exemplo - App.js & Produtos.js
```bash
const App = () => {
    const [ativar, setAtivar] = React.useState(false);

    return(
        <button onClick={() => setAtivar(!ativar)}>Ativar</button>
        {ativar && <Produto/>}
    );
}

// Agora em Produto.js

const Produto = () => {
    return(
        <div className='animeLeft'>
            <h1>Produto</h1>
            <p>meu produto</p>
        </div>
    );
}
```

# Como criar um slide #

Segue o exemplo abaixo de como criar um slide, usando o css modules, vamos tambem criar um arquivo chamado Slide.js.

@exemplo -App.js
```bash
import React from 'react';
import './App.css';
import Slide from './Slide';

function App() {
  const slide = [
    {
      id: 'slide1',
      texto: 'esse é o slide 1',
    },
    {
      id: 'slide2',
      texto: 'esse é o slide 2',
    },
    {
      id: 'slide3',
      texto: 'esse é o slide 3',
    }
  ]
  return (
    <div>
      <Slide slides={slide}/>
    </div>
  );
}
```
###  Exemplo do arquivo Slide.js ###

Nesse arquivo é onde vai conter grande parte da estruturação de nosso slide.

@exemplo - Slide.js
```bash
import React from 'react'
import styles from "./Slide.module.css"

const Slide = ({slides}) => {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect()
        setPosition( -(width * active))
    }, [active])

    function slidePrev() {
        if (active > 0 ) setActive(active - 1)
    }

    function slideNext() {
        if(active < slides.length - 1) setActive(active + 1)
    }

  return (
    <section className={styles.container}>
        <div
        ref={contentRef} 
        className={styles.content} 
        style={{transform: `translateX(${position}px)`}}>
                {slides.map((slide) => (
                <div key={slide.id} className={styles.item}>{slide.texto}</div>
            ))}
        </div>
        <nav className={styles.nav}>
            <button onClick={slidePrev}>Anterior</button>
            <button onClick={slideNext}>Proximo</button>
        </nav>
      
    </section>
  )
}
```

# Imagens #

Podemos incluir imagens de algumas formas, por exemplo~

* diretamente na tag img, importanto a imagem dando um nova a ela e invocando-a.

* Passando ela como um background no css.

* E a forma mais eficaz é passar ela como um componente, assim tento mais liberdade para trabalhar ela, isso inclui as imagens SVG, que podem ser manipuladas com javascript para ter animações.

@exemplo
```bash
import foto from './img/foto.jpg';
import DogSvg from './DogSvg';

const App () => {
    const [olho, setOlho] = React.useState(0);


    return (
        <DogSvg color="#84e" olho={olho}/>
        <img src={foto} alt="Cachorro"/>
    );
}
```
