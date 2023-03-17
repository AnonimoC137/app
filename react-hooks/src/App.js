import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [contar, setContar] = React.useState(0);
  

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar')
  }, [contar]);

  return (
    <div>
      <button  onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default App;
