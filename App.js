import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  Button,
  View,
  Platform,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  // const handlePress = () => {
  //   Alert.alert("So you're here", "Are You a Fool?", [
  //     { text: "Yes", onPress: () => console.log("I am a Fool") },
  //     { text: "No", onPress: () => console.log("No, but I be fool") },
  //   ]);
  // };

  // const handlePrompt = () => {
  //   Alert.prompt("So you're here", "Are You a Fool?", (text) =>
  //     console.log(text)
  //   );
  // };
  return (
    <ListingsScreen />
    //<AccountScreen />
    //<MessagesScreen />
    // <WelcomeScreen />

    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}>
    //   <AppText>I love React Native</AppText>
    //   <MaterialCommunityIcons name="email" size={100} color="dodgerblue" />
    //   <AppButton
    //     title="Press Me"
    //     onPress={() => console.log("I was Pressed")}
    //   />
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
