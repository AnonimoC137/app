import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep Invalido"
  },
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message: 'Email invalido'
  }

}

const useForm = (type) => {
  const [value, setValue] = React.useState(' ');
  const [erro, setErro] = React.useState(null);

  function validar(value) {
    if(value.length === 0) {
       setErro('Preeencha um valor');
       return false;
    } else if (types[type] && !types[type].regex.test(value)) {
       setErro(types[type].message);
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
    onBlur: () => validar(value),
    validar: () => validar(value)}
  )
}

export default useForm
