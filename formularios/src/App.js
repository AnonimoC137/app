import React from 'react'
import './App.css';

const  App = () => {
 
    const [form, setForm] = React.useState({
      nome: ' ',
      email: ' ' 
  });

  function handleSubmit(event) {
      event.preventDeafault();
      console.log(form)
  }

  function handleChange({target}) {
      const {id, value} = target;
      setForm({...form, [id] : value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        name='nome'
        value={form.nome}
        onChange={handleChange}
       />

        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
        <button>enviar</button>
    </form>
  )
}

export default App;
