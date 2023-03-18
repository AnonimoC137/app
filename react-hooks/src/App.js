import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null)
     function handleClick({target}) {
      setDados(target.innerText)
    }

    React.useEffect(() => {
      const produtoLocal = window.localStorage.getItem('produto')
    })

    React.useEffect(() => {
      if(dados !== null) {
        window.localStorage.setItem('produto', dados)
      }
    }, [dados])

    

  
  return (
    <div>
      <h1>preferencia:{dados} </h1>
      <button onClick={handleClick}> notebook</button>
      <button onClick={handleClick}> smartphone</button>
     
    
    </div>
  );
}

export default App;
