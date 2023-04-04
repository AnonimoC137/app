import React from 'react'
import './App.css';
import Input from './Form/Input';
import useForm from './Hooks/useForm';



const App = () => {
 const cep = useForm('cep');
 


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
      
   </form>
  );
}

export default App;
