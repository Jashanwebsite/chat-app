import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect ,useState} from "react";
import LayoutSlider from "./components/layout";
import ChatMessage from "./components/chat";
// import RNSecureKeyStore from "react-native-secure-key-store";
import LoginForm from "./components/login";
import Signup from "./components/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Roomstate from "./components/context/roomstate";
// import secureKeystore from "react-native-secure-key-store";

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState("loading");

  useEffect(() => {
    const checkToken = async () => {
      try {
        const chatItem = await AsyncStorage.getItem("chat");
        console.log(chatItem); // Check what is logged

        if (chatItem === null) {
          setInitialRoute("login");
        } else {
          setInitialRoute("Home");
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
        // Handle the error as needed
        setInitialRoute("login"); // Set a default route in case of an error
      }
    };

    checkToken();
  }, []);

  if (initialRoute === "loading") {
    // Render loading state or a splash screen while checking AsyncStorage
    return <LoadingScreen />;
  }

  return (
    <Roomstate>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={LayoutSlider}
        />
        <Stack.Screen
          name="Chat"
          options={{ headerShown: false }}
          component={ChatMessage}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LoginForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Roomstate>
  );
};

const LoadingScreen = () => {
  // Render a loading screen component
  return (
    // Your loading screen JSX goes here
    <></>
  );
};

export default App;