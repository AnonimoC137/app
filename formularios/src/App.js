import React from 'react'
import './App.css';
import Radio from './Form/Radio';

const pergunta = [
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
 
 const [resposta, setResposta] = React.useState({
   p1: ' ',
   p2: ' ',
   p3: ' ',
   p4: ' ',

 })
 const [mostrar, setMostrar] = React.useState(0)
 function handleChange({target}) {
   setResposta({...resposta, [target.id]: target.value})
  
 }
 

 return(
   <form >
      {pergunta.map((pergunta,index) => (
         <Radio 
            active={mostrar === index}
            key={pergunta.id}
            onChange={handleChange} 
            value={resposta[pergunta.id]}
            setValue={setResposta}
            {...pergunta} 
          />
      ))}
         
         <button>Proximo</button>
   </form>
   
  );
 }

 


export default App;
