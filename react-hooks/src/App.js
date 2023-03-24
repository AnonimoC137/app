import React from 'react';
import Produtos from './Produtos';
import { GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';



const App = () => {
  
  return (
    <GlobalStorage>

       <Produtos/>
       <Limpar/>
       
    </GlobalStorage>
  ) 
      
}

export default App;
