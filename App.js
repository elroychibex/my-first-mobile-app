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
    <ListingDetailsScreen />

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
