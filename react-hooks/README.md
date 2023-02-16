# Estado #

O estado de uma aplicação representa as caracteristicas dela naquele momento. Por exemplo: os dados do usuario foram carregados, o botão está ativo, o usuario está na ppagina de contato e etc...

@exemplo
```bash
const App = () => {
  const ativo = false;

  return <button disabled={ativo}>{ativo ? 'ativo' : 'inativo'}</button>
}

export default App;
```

# Hooks #

Os hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possivel com classes.

@exemplo
```bash

const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botao Ativo' : 'Botao Inativo'}
    </button>
  );
}
```

# React.useState #

O  useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, numeros, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos tambem. É isso que garante a reatividade de componentes funcionais no React.

@exemplo
```bash
const App = () => {
    const [ativo, setAtivo] = React.useState(true);

    // é a mesma coisa que: 
    //const ativoArray = React.useState(true);
    //const ativo = ativoArray[0];
    //const setAtivo = ativoArray[1]
};
```

# Multiplos Estados #

Não existe limites para o uso de useState, podemos definir diversos no mesmo componente.

@exemplo
```bash
const App = () => {
    const [contar, setContar] = React.useState(0);
    const [ativo, setAtivo] = React.useState(true);
    const [dados, setDados] = React.useState({nome: ' ', idade: ' '});

    return <div></div>
};
```

# Props #

Podemos passar o estado e a função de modificação como propriedades para outros elementos.

@exemplo
```bash
import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
        </div>
    );
};
```
