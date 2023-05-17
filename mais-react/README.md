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

```