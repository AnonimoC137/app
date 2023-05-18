# PropTypes #

O PropTypes ira retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É tambem possivel especificar se uma propriedade é obrigatoria ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

@exemplo - Button.js
```bash
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button style={{ width: `${props.width}px`, height: `${props.width / 3}` }}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;
```

@exemplo - App.js
```bash
import React from 'react';
import './App.css';
import Button from './Componentes/Button';

const App = () => {
  return (
    <div className="App">
      <Button width={400}>clique aqui</Button>
    </div>
  );
};

export default App;
```

# Code Splitting # 

Com o Lazy e Suspense podemos dividir o codigo da nossa aplicação. Assim o React só irá carregar certas partes do codigo quando as mesmas forem necessarias.

@exemplo
```bash
import React from 'react'
const Contato = React.lazy(() => import('./Contato))

const App = () => {
    const [ativar, setAtivar] = React.useState(false);

    return (
        <div>
        {ativar &&(
            <React.Sspense fallback={<div>Carregando...</div>}>
                <Contato/>
            </React.Sspense>
        )}
        <button onClick={() => setAtivo(true)}>Clique</button>
        </div>
    )
}
```

# React.memo #

Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.

* Por exemplo o <Header/> de nossa pagina, vamos passar nele no final esse metodo para que ele não seja toda vez renderizado pelo App.js

@exemplo
```bash
import React from 'react';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default React.memo(Header);
```
# React.useReducer #

O useReducer serve para lidarmos com estados que possuam funções fixas responsaveis por modificar o mesmo.

* O useReducer conta com dois parametros, o primeiro é a função redutora, o segundo é o valor do estado inicial.

* Dentro dos [ ] assim como no useState, vamos ter duas constantes, uma com o valor de estado e outra vai ser o "dispatch".

* o "dispatch" vai ser responsavel por mandar as ações para nossa função redutora, servindo meio como um callback.

* Dentro de nossa função redutora vamos ter o state (que é onde esta declarado nosso valor de estado) e um outro parametro chamado action.

* A action vai pegar as propriedades passadas lá no dispatch (que serve de callback) podendo usar essa propriedade junto com um if para fazer condições ou como no nosso exemplo a seguir um switch.

@exemplo
```bash
import React from 'react'

function reducer(state, action) {

}

const App = () => {
    const [state, dispatch] = React.useReducer(reducer, 0);

    return (
        <button onClick={() => dispatch('aumentar')}>+</button>
        <button onClick={() => dispatch('diminuir')}>+</button>
    )
}
```