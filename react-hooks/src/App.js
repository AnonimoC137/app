import React from 'react';


const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botao Ativo' : 'Botao Inativo'}
    </button>
  );
}

export default App;
