import './App.css'
import { Routes, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './pages/Home'
import Cards from './pages/Cards'
import WishList from './pages/WishList'
import Cart from './pages/Cart'

import { CartProvider } from './contexts/Cart'
import { FavoritesProvider } from './contexts/Favorites'

function App() {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards/:category" element={<Cards />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </FavoritesProvider>
      </CartProvider>
    </>
  )
}

export default App
