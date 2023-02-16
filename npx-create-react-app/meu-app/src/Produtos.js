import React from 'react'
import Titulo from './Titulo'

const Produtos = () => {
    const produtos = [
        {nome: 'Notbook', propriedades: ['16gb ram', '512gb']},
        {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
    ]

    const dados = produtos.map(({nome}) => (
    <li>{nome}</li>
    ))
  return (
    <section>
      <Titulo texto='Produtos'/>
      {dados}
    </section>
  )
}

export default Produtos
