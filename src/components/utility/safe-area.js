import styled from "styled-components/native";
import { SafeAreaView, Platform, StatusBar } from "react-native";
const isAndroid = Platform.OS === "android";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${isAndroid && `margin-top:${StatusBar.currentHeight}px`};
`;
