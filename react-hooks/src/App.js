import React from 'react';
import Button from './Button';



const App = () => {
  const [dados, setDados] = React.useState(null);

    async function handleClick(event) {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);

      const json = await response.json()
      setDados(json)
      console.log(response);
  }

  const estilo = {
    fontSize: '20px',
    fontFamily: 'Helvetica',
};

  return (
    <div>
     <button style={estilo} onClick={handleClick}>Notebook</button>
     <button style={estilo} onClick={handleClick}>smartphone</button>
     <button style={estilo} onClick={handleClick}>tablet</button>
    </div>
  );
}

export default App;
