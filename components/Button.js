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
      style={{ marginBottom, marginLeft }}
      onPress={onPress}
      disabled={enable}
    >
      <LinearGradient
        colors={!enable ? ["#9f4df3", "#7b2fe4"] : ["gray"]}
        start={{ x: 0.5, y: 0.8 }}
        style={styles.colorBtn}
      >
        <Text
          style={[
            styles.btnText,
            { fontSize: size ? size : 20, padding: padding ? padding : 15 },
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  colorBtn: {
    borderRadius: 10,
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
});
