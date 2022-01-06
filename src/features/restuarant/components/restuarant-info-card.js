import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";
import {
  Info,
  ResCard,
  ResCardCover,
  SvgContainer,
  StarsContainer,
  ContainerEnd,
  Address,
  Icon,
} from "./restuarant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResCard elevation={5}>
      <ResCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <SvgContainer>
          <StarsContainer>
            {ratingArray.map((item, i) => (
              <SvgXml key={i} xml={star} width={15} height={15} />
            ))}
          </StarsContainer>
          <ContainerEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer space="lg" position="left">
              {isOpenNow && <SvgXml xml={open} width={15} height={15} />}
            </Spacer>
            <Spacer space="lg" position="left">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </ContainerEnd>
        </SvgContainer>
        <Address>{address}</Address>
      </Info>
    </ResCard>
  );
};
