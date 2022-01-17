import React, { useContext } from 'react'
import { FavoritesContext } from '../../contexts/Favorites'

const WishList = () => {
  const { favorites } = useContext(FavoritesContext)
  return (
    <ol>
      {favorites.map(favorite => (
        <li>{favorite}</li>
      ))}
    </ol>
  )
}

export default WishList
