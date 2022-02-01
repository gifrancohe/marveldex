import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteScreen from "../screens/Favorite";
import AccountScreen from "../screens/Account";
import MarveldexScreen from "../screens/Marveldex";
import Marvel from "../screens/Marvel";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Marveldex"
        component={Marvel}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderMarvelIcon(),
          headerTitle: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: "Mi cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

const renderMarvelIcon = () => (
  <Image
    source={require("../assets/marvel-icon.png")}
    style={{ width: 75, height: 75, top: -15 }}
  />
);
