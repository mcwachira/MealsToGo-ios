import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
//
// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
//   background-color: #fff;
// `;


const RestaurantList = styled(FlatList).attrs({

    contentContainerStyle:{ padding: 16 },
})``;
const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="search"
          value={searchQuery}
          onChange={onChangeSearch}
        />
      </SearchContainer>

      {/*<RestaurantListContainer>*/}
      {/*  <RestaurantInfoCard />*/}
      {/*</RestaurantListContainer>*/}

      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
    </SafeArea>
  );
};

export default RestaurantScreen;
