import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Searchbar
          placeholder="search"
          value={searchQuery}
          onChange={onChangeSearch}
        />
      </View>

      <View style={styles.mid}>
      <RestaurantInfoCard/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  top: {
    padding: 20,
    // backgroundColor: "green",
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },

  mid: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
    width: "100%",
   
  },
});

export default RestaurantScreen;
