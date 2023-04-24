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
                <Route path="/" element={<Home />}>
                <Route path="sobre" element={<Sobre />}>
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