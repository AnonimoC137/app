import React from 'react'
import './App.css';

const  App = () => {
  const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        name='nome'
        value={nome}
        onChange={(event)=> setNome(event.target.value)}
       />
      
      <label htmlFor="email">Email</label>
      <input 
        type="email"
        id='email'
        name='email'
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
       />
       <p>{email}</p>
       <button>enviar</button>
    </form>
  );
}

export default App;
