import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AccountScreen } from "../../features/account/screen/Account.screen";
import { LoginScreen } from "../../features/account/screen/Login.screen";
import { RegisterScreen } from "../../features/account/screen/Register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
