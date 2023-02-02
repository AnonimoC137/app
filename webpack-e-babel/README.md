# webpack #

-Agrupa (bundle) o codigo do seu aplicativo

-Permite definirmos os componentes em diferentes arquivos para melhor organização

-Facilita a importação de codigo externo instalado via NPM.

# Babel #

-Transforma JSX return <div></div> em funções de React React.createElement()

-Transforma JavaScript novo const em JavaScript antigo var.

# Webepack Minimo #

Iniciar um pacote npm na pasta do seu aplicatico

OBS: -y é para aceitar todos os termos e perguntas de instalação

@exemplo
```bash
npm init -y
```

-Instalar o webpack, webpack-cli e webpack-dev-server

OBS: Importante, tive bastante dificuldade em configurar o package.json ai instalei o npm install npx create-react-app my-app, peguei as configurações mais atuais desse arquivo .json dele , inclui o main: index.js .

@exemplo
```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```
-Criar arquivos minimos

OBS: no curso ele não fala que tem que criar a pasta public e colocar o index.html me deu muito trabalho até descobrir isso, além de que la no html no script tem que colocar ele como main.js

@exemplo
```bash
- public/
- index.html
- src/
- index.js
```

# Scripts da pasta package.json #

Adicionar os scripts de desenvolvimento e build ao package.json

OBS: depois de usar o npm start para abrir a pagina da aplicação web, usa npm run build, isso vai fazer o main.js ir para uma pasta chamada dist, no curso em não explica muito sobre essa pasta.

@exemplo
```bash
"scripts": {
  "start": "webpack-dev-server --mode development --open --hot",
  "build": "webpack --mode production"
},
```
# React #

outro ponto importante que precisa ser instalado para funcionar corretamente.

@exemplo
```bash
npm install react react-dom
```

- index.js

@exemplo
```bash
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(App(), document.getElementeById('root'));
```

- App.js 

@exemplo
```bash
import React from 'react';

const App = () =>  {
    return <a href="https://www.origamid.com">Origamid</a>

};

export default App
```
# Babel Minimo #

Instalar @bavel/core, @babel/preset-react e babel-loader

@exemplo
```bash
npm install @babel/core @babel/preset-react babel-loader --save-dev
```

-Criar o webpack.config.js para configurarmos o babel no webpack

@exemplo
```bash
```