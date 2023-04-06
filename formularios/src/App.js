import React from 'react'
import './App.css';
import Radio from './Form/Radio';

const perguntas = [
   {
     pergunta: 'Qual método é utilizado para criar componentes?',
     options: [
       'React.makeComponent()',
       'React.createComponent()',
       'React.createElement()',
 
     ],
     resposta: 'React.createElement()',
     id: 'p1',
   },
   {
     pergunta: 'Como importamos um componente externo?',
     options: [
       'import Component from "./Component"',
       'require("./Component")',
       'import "./Component"',
     ],
     resposta: 'import Component from "./Component"',
     id: 'p2',
   },
   {
     pergunta: 'Qual hook não é nativo?',
     options: ['useEffect()', 'useFetch()', 'useCallback()'],
     resposta: 'useFetch()',
     id: 'p3',
   },
   {
     pergunta: 'Qual palavra deve ser utilizada para criamos um hook?',
     options: ['set', 'get', 'use'],
     resposta: 'use',
     id: 'p4',
   },
   
 ]

const App = () => {
 
 const [respostas, setRespostas] = React.useState({
   p1: ' ',
   p2: ' ',
   p3: ' ',
   p4: ' ',

 })
 const [mostrar, setMostrar] = React.useState(0)
 const [resultadoFinal, setResultadoFinal] = React.useState(null)

 function handleChange({target}) {
   setRespostas({...respostas, [target.id]: target.value})
 }

 function resultado() {
   console.log('final')
   const corretas = perguntas.filter(({id, resposta}) => {
      return respostas[id] === resposta
   })
   console.log(corretas)
   setResultadoFinal(`voce acertou ${corretas.length} de ${perguntas.length}`)
 }

 function handleClick() {
   if (mostrar < perguntas.length -1) {
      setMostrar( mostrar + 1)
   } else {
      setMostrar( mostrar + 1)
      resultado()
    }
   
 } 
 

 return(
   <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta,index) => (
         <Radio 
            active={mostrar === index}
            key={pergunta.id}
            onChange={handleChange} 
            value={respostas[pergunta.id]}
            setValue={setRespostas}
            {...pergunta} 
          />
      ))}
         {resultadoFinal ? <p>{resultadoFinal}</p> : <button onClick={handleClick}>Proximo</button>}
         
   </form>
   
  );
 }

 


export default App;
