import React from 'react'
import './App.css';
import Input from './Form/Input';



const App = () => {
 const [cep, setCep] = React.useState(' ');
 const [erro, setErro] = React.useState(null)


   function validaCep(value) {
      if(value.length === 0) {
         setErro('Preeencha um valor');
         return false;
      } else if (!/^\d{5}-?\d{3}$/.test(value)) {
         setErro('preencha um CEP valido');
         return false;

      } else {
         setErro(null)
         return true;
      }
   }

 function handleBlur({target}) {
  validaCep(target.value);

 }

 function handleChange({target}) {
   if(erro) validaCep(target.value)
   setCep(target.value)
 }

 function handleSubmit(event) {
   event.preventDefault()
   if(validaCep(cep)) {
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
         value={cep}
         onChange={handleChange} 
         onBlur={handleBlur}
         placeholder='00000-000'
      />
      {erro && <p>{erro}</p>}
   </form>
  );
}

export default App;
