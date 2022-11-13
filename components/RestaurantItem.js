import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Mancora Peruvian Restaurant",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/31/ee/3e/mancora-peruvian-restaurant.jpg",
    categories: ["Peruvian", "Bar"],
    price: "$$$",
    reviews: 235,
    rating: 4.1,
  },
  {
    name: "Barriles Restaurant & Sports Bar",
    image_url:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/305200980_580230017166650_8656411614636450516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HlP3e6KzNxcAX-mQTq2&_nc_ht=scontent-lga3-1.xx&oh=00_AfC-TZDySh6aDqXgF6lH4cIH0JA6OeUV-GBN_VylaTUavg&oe=637470DB",
    categories: ["Latin", "Bar"],
    price: "$$",
    reviews: 500,
    rating: 4.9,
  },
  {
    name: "Pio Pio Saloon",
    image_url:
      "https://images.squarespace-cdn.com/content/v1/60be753ea973227c9527e28b/1646084131588-FOEA3BELD3JVHCRQCBF3/Pio_2_Exterior3.jpeg?format=1500w",
    categories: ["Latin", "Peruvian", "Bar"],
    price: "$$$",
    reviews: 600,
    rating: 4.5,
  },
  {
    name: "Spice Thai Kitchen",
    image_url:
      "https://whereyoueat.com/r_gallery_images/rgallery-17279/0003-BG.jpg",
    categories: ["Thai", "Asian"],
    price: "$$",
    reviews: 1500,
    rating: 4.2,
  },
];

export default function RestaurantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
      {props.restaurantsData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}> 30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "gold",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
