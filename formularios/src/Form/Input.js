import React from 'react'

const Input = ({id, label, value, onChange, onBlur, type}) => {
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
    </>
    
  )
}

export default Input


