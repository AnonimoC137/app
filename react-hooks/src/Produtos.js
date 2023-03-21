import React from 'react'
import UserContext from './UserContext'

const Produtos = () => {
const dados = React.useContext(UserContext)
console.log(dados)

  return (
    <div>
      {dados.nome}
    </div>
  )
}

export default Produtos
