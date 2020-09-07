import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Alert, SafeAreaView, Button, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

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
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
