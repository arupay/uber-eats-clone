import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantsData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
