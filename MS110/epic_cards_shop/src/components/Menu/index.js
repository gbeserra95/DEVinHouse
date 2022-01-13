import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/Cart'
import Cart from '../../pages/Cart'

const Menu = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="menu">
      <div>{cart.length} items no carrinho</div>
      <h1 className="menu-title">Epic Cards Shop</h1>
      <ul className="menu-list">
        <li>
          <Link className="menu-list-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-list-item" to="/cart">
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
