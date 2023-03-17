import { View, Text } from "react-native";
import React from "react";
import RestaurantScreen from "./src/features/restaurant/screen/restaurants.screens";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const App = () => {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
