import React, { useContext } from "react";
import { AuthContext } from "../../services/auth/auth.context";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigation } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
