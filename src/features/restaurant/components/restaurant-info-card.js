import { View } from "react-native";
import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import star from "../../../../assets/svg/star";
import open from "../../../../assets/svg/open";
import { SvgXml } from "react-native-svg";
const RestaurantCard = styled(Card)`
  background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled.Text`

  font-size: ${(props) => props.theme.fontSizes.body};
  font-family:${(props) => props.theme.fonts.heading}
  color: ${(props) => props.theme.colors.ui.success};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
flex:1
  flex-direction: row;
justify-content:flex-end
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;
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
    isClosedTemporarily = true,
  } = restaurant;

  //use array.from to create a new array

  const ratingArray = Array.from(new Array(rating));
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
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </SectionEnd>
          </Section>

          <Address variant="titleSmall">{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantInfoCard;
