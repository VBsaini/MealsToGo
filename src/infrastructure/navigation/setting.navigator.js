import React from "react";
import { SettingsScreen } from "../../features/setting/screens/setting.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/setting/screens/favourite.screen";

const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name="FavouriteSetting"
        component={FavouritesScreen}
      />
    </SettingsStack.Navigator>
  );
};
