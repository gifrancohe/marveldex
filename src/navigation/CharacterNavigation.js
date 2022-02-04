import { createNativeStackNavigator } from "@react-navigation/stack";
import React from "react";
import Character from "../screens/Character";

const Stack = createNativeStackNavigator();

export default function CharacterNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          title: "",
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}
