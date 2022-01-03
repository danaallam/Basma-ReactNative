import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children, justifyContent, alignItems }) => {
  return (
    <ImageBackground
      source={require("../assets/splash.jpeg")}
      resizeMode="cover"
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
  },
});
