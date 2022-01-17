import { createContext, useState } from 'react'

export const FavoritesContext = createContext([])

export function FavoritesProvider(children) {
  const [favorites, setFavorites] = useState([])

  function handleAddFavorite(item) {
    setFavorites([...favorites, item])
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addFavorite: handleAddFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
