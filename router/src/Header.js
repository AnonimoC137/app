import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
            <NavLink to="/" end>Home</NavLink> |{' '}
            <NavLink to="sobre">Sobre</NavLink>|{' '}
            <NavLink to="contato">Contato</NavLink> |{' '}
        </nav>
    </div>
  )
}

export default Header
