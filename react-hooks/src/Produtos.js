import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const global = React.useContext(GlobalContext)

  return (
    <div>
      <li>Produto: {global.dados.nome}</li>
      <li>Preço: {global.dados.preco}</li>
      <li>Descrição: {global.dados.descricao}</li>
                    
      <input type="text"
        onChange={(event) => global.setValorInput(event.target.value)}
      />
      <button onClick={() => global.handleClick()}>Procurar</button>
      
    </div>
  )
}

export default Produtos
