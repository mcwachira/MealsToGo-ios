import { View, Image } from "react-native";
import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/svg/star";
import open from "../../../../assets/svg/open";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Title,
  Section,
  SectionEnd,
  Address,
  Rating,
  Open,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "20000 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  //use array.from to create a new array

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View>
      <RestaurantCard mode="outlined" elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title variant="titleSmall">{name}</Title>

          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>

            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="labelSmall" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <Open xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionEnd>
          </Section>

          <Address variant="titleSmall">{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantInfoCard;
