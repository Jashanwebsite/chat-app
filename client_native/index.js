import { registerRootComponent } from "expo";
import Appredux from "./App";
import { Provider } from "react-redux";
import store from "./components/state/store";

import React, { Component } from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <Appredux></Appredux>
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
