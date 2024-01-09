import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={styles.container}>jashan</Text>
      <Text style={styles.nav}>nav</Text>
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    height:"100vh",
    width:"100%",
    backgroundColor: "red",
    position: "raletive",
    fontSize: "100px",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#212121",
    flex: "1",
    flexDirection:"row"
  },
  nav: {
    flex: 4,
    backgroundColor: "green",
    position: "raletive",
    fontSize: "100px",
    alignItems: "center",
    justifyContent: "center",
  },
});
