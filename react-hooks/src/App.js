import React from 'react';
import useFetch from './useFetch';



const App = () => {
  const {request, data, loading} = useFetch()

  React.useEffect(() => {
    request('http://ranekapi.origamid.dev/json/api/produto/')
  },[])
    console.log(data)
  if(data === null) return null
  if(loading === true) return <p>Carregando</p>
  return (
    <div>
     {data.map((produtos) => (
      <p key={produtos.id}>{produtos.nome}</p>
     ))}
    </div>
  )      
}

export default App;
