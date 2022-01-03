import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  backgroundcolor: "black";
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
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
});
