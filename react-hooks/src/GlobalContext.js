import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
  const [dados, setDados] = React.useState(null);
  

  React.useEffect(() => {
    fetch('http://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  },[])

  function limparDados() {
    setDados(null)
  }

  function atualizaResultado() {
    fetch('http://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  }
  
    return (
            <GlobalContext.Provider value={{dados, limparDados, atualizaResultado}}>
                {children}
            </GlobalContext.Provider>

       
    ) 
}

