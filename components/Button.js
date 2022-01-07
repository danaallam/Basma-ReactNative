import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({
  marginBottom,
  marginLeft,
  title,
  onPress,
  size,
  padding,
  enable,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.colorBtn,
        {
          marginBottom,
          marginLeft,
          backgroundColor: !enable ? "#ff2d47" : "gray",
        },
      ]}
      onPress={onPress}
      disabled={enable}
    >
      {/* <LinearGradient
        colors={!enable ? ["red", "#ff2d47"] : ["gray"]}
        start={{ x: 0.5, y: 0.8 }}
        style={styles.colorBtn}
      > */}
      <Text
        style={[
          styles.btnText,
          { fontSize: size ? size : 20, padding: padding ? padding : 15 },
        ]}
      >
        {title}
      </Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  colorBtn: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4.65,
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
});
