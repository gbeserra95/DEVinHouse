import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'

function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div>
      <table className="table-cart">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr>
              <td>
                <img
                  className="table-image"
                  src={item.card_images[0].image_url_small}
                />
              </td>
              <td>{item.name}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.card_prices[0].cardmarket_price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
