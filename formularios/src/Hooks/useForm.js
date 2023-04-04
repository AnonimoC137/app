import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    messagem: "Cep Invalido"
  }

}

const useForm = (type) => {
  const [value, setValue] = React.useState(' ');
  const [erro, setErro] = React.useState(null);

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

  return (
    <div>
      
    </div>
  )
}

export default useForm
