import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import { TouchableOpacity } from "react-native";
import Analytics from "../screens/Analytics";
import { AdminContext } from "../context/AdminContext";

const TabNav = ({ navigation }) => {
  const {
    actions: { logout },
  } = useContext(AdminContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerRight: () => (
          <TouchableOpacity
            onPress={async () => {
              await logout();
              navigation.navigate("Login");
            }}
          >
            <AntDesign
              name="logout"
              size={24}
              color="red"
              style={{ marginRight: "10%" }}
            />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Users"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="piechart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
