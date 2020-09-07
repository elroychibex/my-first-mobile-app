import React from "react";
import { Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
      <Image resizeMode="contain" source={require("../assets/bag.png")} />;
    </View>
  );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: "50",
        height: "50",
        backgroundColor: '#fc5c65',
        position: 'absolute',
        
    },
    container: {
        backgroundColor: '#000,
        flex: 1
    },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
