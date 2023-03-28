import React from 'react';
import useFetch from './useFetch';



const App = () => {
  const {request, data} = useFetch()
    
  return (
    <div>
     <a href="https://www.origamid.com" title="Site Origamid">
        Origamid
        </a>
    </div>
  )      
}

export default App;
