import React from "react";
import {FiSearch} from 'react-icons/fi'
import  './style.css'

function App() {
  const [input, setInput] = React.useState(' ')
  const [cep, setCep] = React.useState(null)

async function handleClick() {
  const dados = input
  const response = await fetch(`https://cdn.apicep.com/file/apicep/${dados}.json`);
  const json = await response.json()
  console.log(json)
  setCep(json)
}


  
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      
      <div className="containerInput">
          
          <label for="CEP">formato aceito exemplo: 00000-000
            <input
            type="text"
              placeholder="Digite seu cep"
              pattern="\d{5}-\d{3}"
              onChange={event => setInput(event.target.value.replace(/\D/g, '').replace(/^(\d{5})(\d{1,3})?$/, '$1-$2'))} 
            />
           </label>
           
           <button className="buttonSearch" onClick={handleClick}>
            <FiSearch size={25} color='#000'/>
           </button>
      </div>

      <main className="main">
      
        <h2>CEP: {cep && cep.code}</h2>
        <span>Rua: {cep && cep.address}</span>
        <span>Bairro: {cep && cep.district}</span>
        <span>Estado:{cep && cep.state}</span>
      </main>
    </div>
    
  );
}

export default App;
