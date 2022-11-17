import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Ceviche",
    description:
      "Seafood chunks marinated in lime, cilatro, aji limo & served with toasted corn & onions ",
    price: "20.00",
    image:
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/a0460f44-dd06-4eca-a7b2-b1b0d1b303ad.jpeg",
  },
  {
    title: "Causa",
    description:
      "A perfect dough of mashed potato made with ají amarillo chili pepper layered with tuna fillet ",
    price: "10.00",
    image:
      "https://gdaysouffle.com/wp-content/uploads/2019/11/Causa-Rellena-4-of-4-1-of-1.jpg",
  },
  {
    title: "Seco De Carne",
    description: "cilantro beef stew served with white rice and red beans ",
    price: "21.00",
    image:
      "https://jameaperu.com/wp-content/uploads/2019/11/seco-de-carne700x464.jpg",
  },
  {
    title: "Lomo Saltado de Carne",
    description:
      "classic beef stir from from Peru with marinated beef strips served with white rice and french fries ",
    price: "25.00",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2021/07/Lomo-Saltado-SQ.jpg",
  },
  {
    title: "Anticuchos",
    description:
      "beef heart skewers marinated in an easy chili-based marinade - packed with flavor!",
    price: "11.00",
    image: "https://rumbameats.com/wp-content/uploads/2019/07/Anticuchos-1.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, i) => (
        <View key={i}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "pink", borderRadius: 0 }}
              fillColor="purple"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRaidus: 8 }}
    />
  </View>
);
