import React from 'react'

const Produtos = ({produtos}) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if(produtos !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtos}`)
      .then((response) => response.json())
      .then((json) => setDados(json))
    }
  }, [produtos])

  if(dados === null) return null;
  return (
    <div>
     <h1>{dados.nome}</h1>
     <p>{dados.preco}</p>
    </div>
  )
}

export default Produtos
