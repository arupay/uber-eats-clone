import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

let YELP_API_KEY =
  "--xRpQDsDX-6aNjdyq8G-cxl47xJxl8MF3G5coJqdn2ICNYk43p1r_6AP2qZehxu_-c8adbJB4__QqDEbJ5v1SK0B7f7IQWamP50SJVAVXh2jl0A8bGofxJ1TH1wY3Yx";
export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const getRestaurantsFromYelp = () => {
    const yelpURL =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=baldwin+ny";

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);
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
