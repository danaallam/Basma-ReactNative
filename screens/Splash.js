import React, { useEffect, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import { AdminContext } from "../context/AdminContext";

const Splash = ({ navigation }) => {
  const {
    actions: { checkIfLoggedIn },
  } = useContext(AdminContext);

  useEffect(async () => {
    if ((await checkIfLoggedIn()) == 1) {
      navigation.navigate("Account");
    }
  }, []);

  return (
    <Background justifyContent="flex-end" alignItems="flex-start">
      <Text style={styles.text}>manage your business as a puzzle.</Text>
      <Button
        marginBottom={"20%"}
        marginLeft={"5%"}
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </Background>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "15%",
    marginLeft: "5%",
  },
});
