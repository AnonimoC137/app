import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [produtos, setProdutos] = React.useState(null)
     

    React.useEffect(() => {
      const produtoLocal = window.localStorage.getItem('produto')
      console.log(produtoLocal)
      if(produtoLocal !== null) {
        setProdutos(produtoLocal)
      }
    },[])

    React.useEffect(() => {
      if(produtos !== null) {
        window.localStorage.setItem('produto', produtos)
      }
    }, [produtos])

    function handleClick({target}) {
      setProdutos(target.innerText)
    }

  
  return (
    <div>
      <h1>preferencia:{produtos} </h1>
      <button onClick={handleClick}> notebook</button>
      <button onClick={handleClick}> smartphone</button>
      <Produtos produtos={produtos}/>
     
    
    </div>
  );
}

export default App;
