import React from 'react';
import useLocalStorage from './useLocalStorage'



const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', 'caneta')
  function handleClick({target}) {
    setProduto(target.innerText);
    
  }
  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  ) 
      
}

export default App;
