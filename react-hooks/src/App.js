import React from 'react';
import useFetch from './useFetch';



const App = () => {
  const {request, data, loading, error} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('http://ranekapi.origamid.dev/json/api/produto/')
    }
    fetchData()
    
  },[])
    console.log(data)
  if(error) return <p>{error}</p>
  if(loading === true) return <p>Carregando</p>
  if(data) 
    return (
      <div>
      {data.map((produtos) => (
        <p key={produtos.id}>{produtos.nome}</p>
      ))}
      </div>
    )      
  else return null
}

export default App;
