import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";

const FavButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFav, removeFromFav } = useContext(FavouritesContext);
  const isFav = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavButton
      onPress={() =>
        !isFav ? addToFav(restaurant) : removeFromFav(restaurant)
      }
    >
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={25}
        color={isFav ? "red" : "white"}
      />
    </FavButton>
  );
};
