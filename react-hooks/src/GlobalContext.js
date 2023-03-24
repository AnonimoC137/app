import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
    const [dados, setDados] =  React.useState(true)
    const [valorInput, setValorInput] = React.useState(true)

 
    async function handleClick()  {
        const resposta = await fetch(`http://ranekapi.origamid.dev/json/api/produto/${valorInput}`);
        const json = await resposta.json()
        setDados(json)
    }

    
   
    return (
            <GlobalContext.Provider value={{dados, handleClick,setValorInput}}>
                {children}
            </GlobalContext.Provider>

       
    ) 
}

