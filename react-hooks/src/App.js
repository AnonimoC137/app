import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null)

    async function handleClick(event) {
      setCarregando(true)
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);

      const json = await response.json()
      setDados(json)
      setCarregando(false)
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
     {carregando && <p>Carregando...</p>}
     {!carregando && dados && <Produtos dados={dados}/>}
    </div>
  );
}

export default App;
