import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import Produto from './Produto';

const  App = () =>  {
  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="sobre" element={<Sobre />}/>
                <Route path="produto/:id" element={<Produto />}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
