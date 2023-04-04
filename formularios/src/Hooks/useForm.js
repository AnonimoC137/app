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

  function validar(value) {
    if(value.length === 0) {
       setErro('Preeencha um valor');
       return false;
    } else if (types[type].regex.test(value)) {
       setErro('preencha um CEP valido');
       return false;

    } else {
       setErro(null)
       return true;
    }
 }

 function onChange({target}) {
  if(erro) validar(target.value)
  setValue(target.value)
 }

  return (
    {value,
    setValue,
    erro,
    setErro,
    validar,
    onChange,
    onBlur: () => validar(value)}
  )
}

export default useForm
