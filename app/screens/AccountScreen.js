import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-lit-bulleted",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Elroy Chibex"
          subTitle="elroychibex@gmail.com"
          image={require("../assets/elroy-min.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList data={menuItems} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
