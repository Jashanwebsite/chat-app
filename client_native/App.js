import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LayoutSlider from "./components/layout";
import ChatMessage from "./components/chat";
import LoginForm from "./components/login";
import Signup from "./components/Signup";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={LayoutSlider}
        ></Stack.Screen>
        <Stack.Screen
          name="Chat"
          options={{ headerShown: false }}
          component={ChatMessage}
        ></Stack.Screen>
         <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        ></Stack.Screen>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LoginForm}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
