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