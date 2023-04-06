import React from 'react'

const Input = ({id, label, value, onChange, onBlur, type, erro, options}) => {
  return (
      <>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        options={options}
      />
      {erro && <p>{erro}</p> }
    </>
    
  )
}

export default Input


