import React from "react";
import styled, { useTheme } from "styled-components/native";

const spaceVariant = {
  small: 1,
  med: 2,
  lg: 3,
};

const positionsVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const getVariant = (pos, space, theme) =>
  `${positionsVariant[pos]}: ${theme.space[spaceVariant[space]]};`;

export const Spacer = ({ position, space, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, space, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
