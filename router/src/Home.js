import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head title='Home'/>
      <h1>HOME</h1>
      <p>Essa é a pagina home</p>

      <Link to='produto/notebook'>Notebook</Link>|{' '}
      <Link to='produto/smartphone'>Smartphone</Link>|{' '}
    </div>
  )
}

export default Home
