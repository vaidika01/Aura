import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    const existingItemIndex = favorites.findIndex(
      (favoriteItem) => favoriteItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      alert("This product is already in your favorites.");
    } else {
      setFavorites((prevFavorites) => [
        { ...item, quantity: 1 },
        ...prevFavorites,
      ]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
