import React from 'react';
import './App.css';
import Slide from './Slide';

function App() {
  const slide = [
    {
      id: 'slide1',
      texto: 'esse é o slide 1',
    },
    {
      id: 'slide2',
      texto: 'esse é o slide 2',
    },
    {
      id: 'slide3',
      texto: 'esse é o slide 3',
    }
  ]
  return (
    <div>
      <Slide slides={slide}/>
    </div>
  );
}

export default App;
