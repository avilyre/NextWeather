import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { ForecastDetailsScreen } from "../screens/ForecastDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen}
      />

      <Screen
        name="ForecastDetails"
        component={ForecastDetailsScreen}
      />
    </Navigator>
  )
}