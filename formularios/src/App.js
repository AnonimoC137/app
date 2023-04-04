import React from 'react'
import './App.css';
import Input from './Form/Input';
import useForm from './Hooks/useForm';



const App = () => {
 const {value,
   setValue,
   erro,
   setErro,
   validar,
   onChange,
   onBlur
   } = useForm('cep');


 function handleSubmit(event) {
   event.preventDefault()
   if(validar(value)) {
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
         value={value}
         onChange={onChange} 
         placeholder='00000-000'
      />
      {erro && <p>{erro}</p>}
   </form>
  );
}

export default App;
