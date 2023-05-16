# Mini Projeto - Produtos #

Vou explicar prevemente sobre esse projeto aqui.

* No arquivo App.js vamos importar todos os componentes que vamos usar, alem das rotas que iremos implementar, e nosso css global.

* Dentro da nossa função App, vamos criar uma div mae com um className de App, para facilitar o entendimento.

* Dentro de nossa div vamos colocar nosso Head, que por sua vez vai fazer a mudanda de titulo e descrição de nosso site.

* Vamos criar os caminhos que vão guiar nossos links dos produtos, passando para as rotas os componente que criamos, como contato e produtos, por fim vamos colocar o nosso componente Footer.

@exemplo - App.js
```bash
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from './Components/Produtos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contato from './Components/Contato'
import Produto from './Components/Produto'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos/>}/>
            <Route path='produto/:id' element={<Produto/>}/>
            <Route path='contato' element={<Contato/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
```

### Arquivo Produtos ###

* No arquivo produtos vamos precisar importar o link da lib das rotas, nosso css e nosso componente Head.

* Nesse arquivo vamos fazer um fetch em nossa api, para que possamos puxar as imagens de cada produto que temos lá, para isso vamos criar um estado, chamamos ele de produtos.

* Com o nosso fetch pronto vamos colocar dentro do retorno uma section, fazendo uma map em nosso estado para criar a estrutura dos produtos dentro do nosso link, assim quando clicarmos na imagem, vamos ser direcionados para a rota que criamos do produto especifico.

@exemplo 
```bash
import React from 'react'
import styles from './Produtos.module.css'
import { Link } from 'react-router-dom'
import Head from './Head'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => response.json())
    .then(json => setProdutos(json))
  },[])

  if(produtos === null) return null

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head 
        title='Produtos'
        description='essa e a pagina de produtos'
      />
      
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].src} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos
```
### Arquivo Produto ###

* Já em produto vamos fazer um fetch mais robusto, vamos criar uma estrutura async e vamos passar dentro do "try", "catch" e "finally"

* Criamos 3 estados reativos, uma para a resposta da api, uma para criar um efeito de carregando e outro para tratar o erro se existir.

* Tambem vamos usar o metodo useParams, ele é responsavel por pegar o vaminho de nossa rota assim podemos usar o id passado por ele no fetch.

* Vamos fazer um map tambem no estado "produto" para podemos acessar as duas fotos do produto disponiveis.

* E por fim vamos passar o nome, preco e destrição do produto em uma div separada para poder configurar isso no css.

IMPORTANTE caso tenha duvida no futuro de como fazer esse layout no grid, o estilo esta lá no css App.css na parte do .App lá foi colocado como max-width: 40rem mas antes passado o display: flex e flex-direction: columns, alem das configurações do grid no proprio css dos arquivos, essa explicação é somente para o tamanho final dos itens.

@exemplo - Produto.js
```bash
import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import Head from './Head';
import '../App.css'


const Produto = () => {
    const [produto, setProduto] = React.useState(null);
    const [carregando, setCarregando] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams()
    console.log(id)

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setCarregando(true)
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch(erro) {
                setError('um erro ocorreu')
            } finally {
                setCarregando(false)
            }
            
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if(error) <p>{error}</p>

    if(carregando) return <div className="loading"></div>

    if(produto === null) return null
  return (
    <section className={`${styles.produto} animeLeft`}>
        
        <Head 
            title={`${produto.nome}`}
            description={`${produto.descricao}`}
        />
        <div>
            {produto.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
            ))}
        </div>

        <div>
            <h1>{produto.nome}</h1>
            <span className={styles.preco}>R$ {produto.preco}</span>
            <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      
    </section>
  )
}

export default Produto

```