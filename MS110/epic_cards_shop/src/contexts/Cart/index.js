import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const CartContext = createContext([])

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function handleAddCart(card) {
    /* SOLUÇÃO PARA ADICIONAR UMA CARTA UMA ÚNICA VEZ NO CARRINHO
    if (cart.find(item => item.id === card.id)) {
      alert('Item já adicionado ao carrinho')
      return
    }
    */

    // SOLUÇÃO PARA ADICIONAR UM NOVO ID NO CARRINHO
    const newCard = {
      ...card,
      idCard: uuidv4()
    }

    setCart([...cart, newCard])
    localStorage.setItem('cart', JSON.stringify([...cart, card]))
    alert('Adicionado ao carrinho')
  }

  function handleRemoveCart(idCard) {
    const cartFiltered = cart.filter(item => {
      if (item.idCard === idCard) {
        return false // Remove item do carrinho
      } else {
        return true // permanece item no carrinho
      }
    })
    // const cartFiltered = cart.filter(item => item.idCard === idCard)
    setCart(cartFiltered)
    localStorage.setItem('cart', JSON.stringify(cartFiltered))
    alert('Removido do item')
  }

  useEffect(() => {
    function handleGetItensLocalStorage() {
      const storedArray = JSON.parse(localStorage.getItem('cart'))
      setCart(storedArray || [])
    }
    handleGetItensLocalStorage()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: handleAddCart,
        removeItem: handleRemoveCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/
