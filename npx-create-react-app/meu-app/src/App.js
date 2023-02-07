import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    {nome: 'notbook', preco: 'R$ 2500'},
    {nome: 'geladeira', preco: 'R$ 3000'},
    {nome: 'smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

const mario = {
  cliente: 'mario',
  idade: 31,
  compras: [
    {nome: 'notbook', preco: 'R$ 2500'},
    {nome: 'geladeira', preco: 'R$ 3000'},
    {nome: 'notbook', preco: 'R$ 1500'},
    {nome: 'notbook', preco: 'R$ 3500'},
  ],
  ativa: true,
};



const App = () => {
    const dados = mario
   const total = dados.compras
   .map(item => +item.preco.replace('R$', ' '))
   .reduce((a, b) => a + b)
   
  return (
      <div>
      
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: {' '}
            <span style={{color: dados.ativa ? 'green' : 'red'}}>
              {dados.ativa ? 'Ativa' : 'Inativa'}
            </span>

        </p>
        <p>Gasto: R$ {total} </p>
        {total > 10000 && <p>Voce está gastando muito</p>}

      </div>
    );
};

export default App;
