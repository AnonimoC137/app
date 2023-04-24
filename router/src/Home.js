import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <p>Essa é a pagina home</p>

      <Link to='produto/notebook'>Notebook</Link>|{' '}
      <Link to='produto/smartphone'>Smartphone</Link>|{' '}
    </div>
  )
}

export default Home
