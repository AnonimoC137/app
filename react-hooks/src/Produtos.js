import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const {dados} = React.useContext(GlobalContext)

if(dados === null) return null

  return (
    <div>
      Produto: {dados.map(produtos => <li key={produtos.id}>{produtos.nome}</li>)}

    </div>
  )
}

export default Produtos
