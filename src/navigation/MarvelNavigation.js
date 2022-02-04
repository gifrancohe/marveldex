import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Marvel from "../screens/Marvel";
import Character from "../screens/Character";

const Stack = createNativeStackNavigator();

export default function MarvelNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Marvel"
        component={Marvel}
        options={{
          title: "",
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}
