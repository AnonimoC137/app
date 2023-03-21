import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const global = React.useContext(GlobalContext)

  return (
    <div>
      {global.nome}
    </div>
  )
}

export default Produtos
