import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

let YELP_API_KEY =
  "--xRpQDsDX-6aNjdyq8G-cxl47xJxl8MF3G5coJqdn2ICNYk43p1r_6AP2qZehxu_-c8adbJB4__QqDEbJ5v1SK0B7f7IQWamP50SJVAVXh2jl0A8bGofxJ1TH1wY3Yx";
export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("Rockville+Centre");
  const [activeTab, setActiveTab] = useState("delivery");
  const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        //filter restaurants wether we have active tab to delivery or pick up
        setRestaurantData(
          json.businesses.filter((e) =>
            e.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantsData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
