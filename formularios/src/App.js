import React from 'react'
import './App.css';

const  App = () => {
 
    const [form, setForm] = React.useState({
      nome: ' ',
      email: ,
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
    <form onSubmit={handleSubmit}></form>
  )
}

export default App;
