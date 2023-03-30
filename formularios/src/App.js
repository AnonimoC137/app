import React from 'react'
import './App.css';

const  App = () => {
  const [nome, setNome] = React.useState(' ');

  function handleSubmit(event) {
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        value={nome}
        onChange={(event)=> setNome(event.target.value)}
       />
       <p>{nome}</p>
       <button>enviar</button>
    </form>
  );
}

export default App;
