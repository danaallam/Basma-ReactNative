import React, { useContext } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";
import { AdminContext } from "../context/AdminContext";

const Login = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const {
    state: { email, password, error },
    actions: { login, setEmail, setPassword },
  } = useContext(AdminContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Text style={styles.title}>Make Your Business More Powerful </Text>
          </View>
          <View style={styles.down}>
            <Text style={styles.formTitle}>Login</Text>
            <TextInput
              value={email}
              onChangeText={(e) => setEmail(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Email"
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => setPassword(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Password"
            />
            <Text style={styles.error}>{error}</Text>
            <Button
              title="Login"
              onPress={async () => {
                if ((await login()) == 1) {
                  navigation.navigate("Account");
                }
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  up: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderRadius: 20,
    backgroundColor: "black",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 50,
    color: "white",
  },
  down: {
    flex: 1,
    alignItems: "center",
  },
  formTitle: {
    marginVertical: 30,
    fontSize: 35,
  },
  txt: {
    marginBottom: "4%",
    borderBottomWidth: 1,
    padding: "2%",
    fontSize: 18,
    borderColor: "gray",
  },
  error: {
    marginBottom: "4%",
    color: "red",
  },
});
