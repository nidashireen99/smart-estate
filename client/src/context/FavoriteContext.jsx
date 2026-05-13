import { createContext, useState } from "react"

export const FavoriteContext =
  createContext()

const FavoriteProvider = ({
  children,
}) => {

  const [favorites, setFavorites] =
    useState([])

  const toggleFavorite = (property) => {

    const exists =
      favorites.find(
        (item) => item.id === property.id
      )

    if (exists) {

      setFavorites(
        favorites.filter(
          (item) =>
            item.id !== property.id
        )
      )

    } else {

      setFavorites([
        ...favorites,
        property,
      ])

    }
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider