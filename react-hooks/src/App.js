import React from 'react';


const App = () => {
  const [contar, setContar] = React.useState(0)
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto')
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, [])
  console.log(valor)
  return (
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  )
}

export default App;
