import React from 'react'

const Input = ({id, label, value, onChange, onBlur, type, erro}) => {
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
      />
      {erro && <p>{erro}</p> }
    </>
    
  )
}

export default Input


