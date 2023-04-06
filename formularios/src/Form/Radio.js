import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {

  if(active === false) return null
  return (
    <>
     <fieldset>
        <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
        {options.map((option) => (
          <label 
            key={option} 
            
          >
              <input 
                type="radio" 
                id={id}
                checked={value === option}
                value={option} 
                onChange={onChange} 
              />
              {option}
          </label>
        ))}
     </fieldset>
    </>
  )
}

export default Radio
