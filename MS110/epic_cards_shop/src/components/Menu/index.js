import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-title">Epic Cards Shop</h1>
      <ul className="menu-list">
        <li>
          <Link className="menu-list-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-list-item" to="/carrinho">
            Carrinho
          </Link>
        </li>
        <li>
          <Link className="menu-list-item" to="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
