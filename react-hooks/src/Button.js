import React from 'react'



const Button = ({nome}) => {
    
 
    const estilo = {
        fontSize: '20px',
        fontFamily: 'Helvetica',
        display: 'flex',
        flexWrap: 'nowrap'
        
    };

    
  return (
    <div>

      <button style={estilo}>{nome}</button>
      
    </div>
  )
}

export default Button
