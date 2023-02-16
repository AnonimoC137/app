import React from 'react'
import Produto from './Produto'
import Titulo from './Titulo'

const Produtos = () => {
    const produtos = [
        {nome: 'Notbook', propriedades: ['16gb ram', '512gb']},
        {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
    ]

    
  return (
    <section>
        <Titulo texto='Produtos'/>
        {produtos.map(({nome, propriedades}) => (
            <section>
                    <Produto key={nome} nome={nome} propriedades={propriedades}/>
                    
            </section>
            
        
        ))}
      
    </section>
  )
}

export default Produtos
