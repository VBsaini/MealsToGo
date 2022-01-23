import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer";
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurantInfo";
import { Text } from "../typography/text";

const FavWrapper = styled.View`
  padding: 10px;
  box-shadow: 2px 5px 20px black;
`;

const NoFavText = styled(Text)`
  text-align: center;
  padding: ${(props) => props.theme.space[3]};
`;

const FavText = styled(Text)`
  text-align: center;
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return <NoFavText variant="caption">You have no favourites</NoFavText>;
  } else {
    return (
      <FavWrapper>
        <Spacer position="left" space="lg">
          <FavText variant="caption">Favourites</FavText>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <Spacer key={key} position="left" space="lg">
                <TouchableOpacity
                  onPress={() => {
                    onNavigate("RestaurantDetail", {
                      restaurantItem: restaurant,
                    });
                  }}
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FavWrapper>
    );
  }
};
