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