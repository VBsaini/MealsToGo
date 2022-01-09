import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const restaurantArray = favourites.filter(
      (restaurantItem) => restaurantItem.placeId !== restaurant.placeId
    );
    setFavourites(restaurantArray);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFav: add,
        removeFromFav: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
