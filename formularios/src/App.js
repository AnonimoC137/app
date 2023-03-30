import React from 'react'
import './App.css';

const coresArray = ['azul', 'roxo','laranja', 'verde', 'vermelho', 'cinza' ]

const App = () => {
  const [cores, setCores] = React.useState(['vermelho']);

  function handleChange({target}) {
    if( target.checked) {
        setCores([...cores, target.value])
    } else {
      setCores(
        cores.filter((cor) =>  cor !== target.value)
      )
    }
  }

  return(
    <form>
      {coresArray.map((cor) => (
        <div key={cor}>
          <label>
              <input 
                  type="checkbox"
                  value={cor}
                  checked={cores.includes(cor)}
                  onChange={handleChange}
              /> 
              {cor}
            </label>
        </div>
        
      ))}
      
      
    </form>
  );
}

export default App;
