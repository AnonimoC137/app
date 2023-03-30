import React from 'react'
import './App.css';

const arrayForm = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'cep',
    type: 'number',
  },
  {
    id: 'rua',
    label: 'rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'numero',
    type: 'number',
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'estado',
    type: 'text',
  },
]

const  App = () => {
  const [dados, setDados] = React.useState(null)
    const [form, setForm] = React.useState({
      nome: ' ',
      email: ' ' ,
      senha: ' ',
      cep: ' ',
      rua: ' ',
      numero: ' ',
      bairro: ' ',
      cidade: ' ',
      estado: ' ',
      
  });


    
  function handleSubmit(event) {
      event.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
         method: 'POST',
          headers: {
             'Content-Type' : 'application/json',  
         },
         body: JSON.stringify(form),
      }).then((response) => setDados(response))
     
  }

  function handleChange({target}) {
      const {id, value} = target;
      setForm({...form, [id] : value})
  }

  return (
    <form onSubmit={handleSubmit}>
      {arrayForm.map(({id, label, type}) => (
        <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input 
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
        </div>
      ))}
      
        <button>enviar</button>
        {dados && dados.ok && <p>usuario cadrastrado</p>}
      
          
        
        
    </form>
  )
}

export default App;
