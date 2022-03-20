import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { ForecastDetailsScreen } from "../screens/ForecastDetails";
import { SearchScreen } from "../screens/SearchScreen";
import { AppRoutesParams } from "./interface";

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesParams>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen}
      />

      <Screen
        name="SearchScreen"
        component={SearchScreen}
      />

      <Screen
        name="ForecastDetailsScreen"
        component={ForecastDetailsScreen}
      />
      
    </Navigator>
  )
}