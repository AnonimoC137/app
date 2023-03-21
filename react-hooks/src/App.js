import React from 'react';
import Produtos from './Produtos';
import { GlobalStorage } from './GlobalContext';



const App = () => {
  
  return (
    <GlobalStorage>

       <Produtos/>
       
    </GlobalStorage>
  ) 
      
}

export default App;
