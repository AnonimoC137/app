# React Router Dom #

É uma extensão que permite gerenciarmos as rotas do React. Ela é desenvolvida e mantida pela empresa React Trainning.

@exemplo
```bash
npm install history react-router-dom@next
```
# BrowserRouter, Routes e Router #

O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O "Routes" define a area em que vamos colocar os nossos "Route". O "Route"recebe um caminho em "path", se esse caminho for o mesmo do URL ele ira renderizar o component que estiver dentro de "element={}".

* Todos os elementos que não forem rotas, podem e devem ficar fora do "Routes".

@exemplo
```bash
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="sobre" element={<Sobre />}/>
            </Routes>
        </BrowserRouter>
    );
}
```
# Link #

O link ira  modificar a rota e rendenrizar o novo componente sem recarregar a pagina.

@exemplo
```bash
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="sobre">Sobre</Link>
            <Link to="contato">Contato</Link>
        </nav>
    );
}
```
### NavLink ###
* Podemos tambem usar o "NavLink" com ele sabemos exatamente onde estamos na pagina pois ele coloca um active na pagina onde esta selecionada, essa forma é a mais comum de ser usada.

* Quando usamos essa opção no NavLink do home que passamos no to="/" precisamos tambem colocar o "end", para ele entender que esse é o caminho completo.

@exemplo
```bash
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="contato">Contato</NavLink>
        </nav>
```
# useNavigate #

O hook useNavigate permite navegarmos programaticamente entre as rotas, Por exemplo, pode ser utilizado quando o usuario faz um login bem sucedido e enviamos o mesmo a pagina de sua conta.

* Podemos colocar esse hook em uma const e utilizar ela como uma função, passando dentro dela o caminho inteiro na qual o usurario vai ser encaminhado.

@exemplo
```bash
import {useNavigate} from 'react-router-dom';

const Login = () = > {
    const natigate = useNavigate();

    function handleClick() {
        console.log('login feito com sucesso');
        navigate('/sobre')
    }

    return (
        <div>
            <h1>Faça seu login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}
```
# Rota dinamica #

O uso de :nome ira definir uma rota dinamica, onde o nome podera ser utilizado como variavel dentro do componente. Seve para buscarmos rotas dinamicas como produto/notebook ou produto/smartphone.

@exemplo
```bash
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import Produto from './Produto';

const  App = () =>  {
  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="sobre" element={<Sobre />}/>
                <Route path="produto/:id" element={<Produto />}/>
            </Routes>
        </BrowserRouter>
  );
}
```
### useParams ###
* Podemos usar o link em conjunto com o useParams para ele poder capturar o id que estamos passando na URL assim podendo usa-lo para diversas finalidades.

@exemplo
```bash
import { useParams } from 'react-router-dom'

const Produto = () => {
    const params = useParams();
  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}
```
### useLocation ###

Podemos usar esse hook para pegar o caminho inteiro que esta sendo usado, muito util para ferramentas de analise para ver em qual paginas o usuario esta navegando.

@exemplo
```bash
const Header = () => {
    const location = useLocation();

    React.useEffect(() => {
        console.log('mudou de rota');

    }, [location])
}
```
# Nested Routes #

Utilizamos nested routes quando precisamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc... Utilie o \* para definir que existem outras rotas dentro.

* No exemplo a seguir criamos 3 componentes, ProdutoDescricao. ProdutoAvaliacao, ProdutoCustomizado, com eles vamos criar 3 rotas diretas em produto.

* Vamos usar as rotas passando o path de cada uma e o elemento vai conter os componentes citados acima.

* Criamos tambem um nav contendo um NavLink que nos da acesso as rotas que criamos.

* IMPORTANTE lembrar que,  path="produto/:id/*"  precisa ser passado assim para que ele aceite outras rotas depois do nosso id, se não vai dar pagina não encontrada pois ele vai parar de capturar o caminho quando pegar o id.

* Então em resumo, basicamente criamos rotas, e para acessar essas rotas utilizamos os links, que podem ser links normais e NavLink. LEMBRANDO que no link da descrição que é o link que fica na propria pagina do produto o path='' fica vazio, no caminho da rota tambem.


@exemplo - Produto.js
```bash
import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to=''>Descrição</NavLink>
        <NavLink to='avaliacao'>Avaliação</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<ProdutoDescricao/>}/>
        <Route path='avaliacao' element={<ProdutoAvaliacao/>}/>
        <Route path='customizado' element={<ProdutoCustomizado/>}/>
      </Routes>
    </div>
  )
}
```

# Head # 
No react não temos acesso direto as tags e informações do Head. Porem com o uso de rotas é essencial realizar a mudança do titulo e descrição para cada rota. Podemos fazer isso através de um componente ou custom hook.

* Nesse exemplo estamos capturando a tag meta com name de description e colocando em seu conteudo o valor que vai vir do props.description que vamos passar lá no App.js

@exemplo
```bash
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
    .querySelector('meta[name='description']')
    .setAttribute('content', props.description)
  }, [props])

  return <> </>
}
```

# Mini projeto #

OBS: Coloquei dentro da pasta router com o nome de router-desafio1.

* Utilize a API  abaixo para puxar a lista de produtos

* https://ranekapi.origamid.dev/json/api/produto

* Cada produto possui o id, o mesmo pode ser passado na api

* https://ranekapi.origamid.dev/json/api/produto/notebook


