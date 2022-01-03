import React from "react";
import { createStackNavigator } from "@react-navigation//stack";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

const StackNav = ({ initialRoute = "Splash" }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
