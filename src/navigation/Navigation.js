import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteNavigation from "./FavoriteNavigation";
import AccountNavigation from "./AccountNavigation";
import MarvelNavigation from "./MarvelNavigation";
import Marvel from "../screens/Marvel";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Marveldex"
        component={MarvelNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderMarvelIcon(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
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
