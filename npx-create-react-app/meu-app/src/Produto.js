import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <>
      <section>
        <h1 style={{border: '2px solid black'}}>{nome}</h1>
        <ul>
            {propriedades.map((propriedade) => (
                <li>{propriedade}</li>
            ))}
        </ul>
        
      </section>
      
    </>
  )
}

export default Produto;
