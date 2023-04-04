import React from 'react'
import './App.css';
import Input from './Form/Input';
import useForm from './Hooks/useForm';



const App = () => {
 const cep= useForm('cep');
 const email= useForm('email');
 

 
 function handleSubmit(event) {
   event.preventDefault()
   if(cep.validar()) {
      console.log('Enviar');
   } else {
      console.log('Não enviar');
   }
 }

  return(
   <form onSubmit={handleSubmit}>
      <Input 
         type="text"
         label ="CEP"
         id='cep' 
         placeholder='00000-000'
         {...cep}
      />
      <Input 
         type="email"
         label ="Email"
         id='email' 
         placeholder='email@email.com'
         {...email}
      />
      <button>Enviar</button>
   </form>
  );
}

export default App;
