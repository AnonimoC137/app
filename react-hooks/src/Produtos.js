import React from 'react'

const Produtos = ({dados}) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    if(produtos !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`).then(response => response.json()).then(json => setProdutos(json))
    }
  }, [])


  return (
    <div>
     <h1>{produtos.nome}</h1>
     <p>{produtos.preco}</p>
    </div>
  )
}

export default Produtos
