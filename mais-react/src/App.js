import React from 'react';
import './App.css';
import Button from './Componentes/Button';
import Header from './Componentes/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button width={400}>clique aqui</Button>
    </div>
  );
};

export default App;
