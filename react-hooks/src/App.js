import React from 'react';
import Produtos from './Produtos';
import UserContext from './UserContext';


const App = () => {
  
  return (
    <UserContext.Provider value={{nome: 'alexandre'}}>
      
          <Produtos/>
      
    </UserContext.Provider>
  )
}

export default App;
