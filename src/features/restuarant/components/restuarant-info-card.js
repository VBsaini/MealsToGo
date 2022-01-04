import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const ResCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary}
  padding: ${(props) => props.theme.space[3]};
`;

const ResCardCover = styled(Card.Cover)``;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <ResCard elevation={5}>
      <ResCardCover key={name} source={{ uri: photos[0] }} />

      <Title>Card title</Title>
    </ResCard>
  );
};
const styles = StyleSheet.create({});
