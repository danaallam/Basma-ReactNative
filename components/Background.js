import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children, justifyContent, alignItems }) => {
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      resizeMode="contain"
      style={[styles.image, { justifyContent, alignItems }]}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: "white",
  },
});
