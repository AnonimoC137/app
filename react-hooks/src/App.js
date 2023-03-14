import React from 'react';



const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['item 1']);

  function handleClick() {
    setContar((contar) => {
      return contar + 1
    })
  }

  return (
    <div>
     <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
