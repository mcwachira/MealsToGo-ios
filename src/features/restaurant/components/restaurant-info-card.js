import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Card mode="outlined" elevation={5} style={styles.card}>
        <Card.Cover
          source={{ uri: photos[0] }}
          style={{}}
          style={styles.cover}
        />
        <Card.Content>
          <Text variant="titleSmall">{name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },

  cover: {
    padding: 15,
  },
});
