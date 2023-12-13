import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Header.scss'
import logo from '../img/logo.png'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <ul className="nav__bar">
        <li>
          <Link to="/home" className="nav__link">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/a-propos" className="nav__link">
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
