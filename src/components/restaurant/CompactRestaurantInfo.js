import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;
const CompactWebView = styled(WebView)`
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 0 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOflines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
