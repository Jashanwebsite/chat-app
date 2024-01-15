import { StyleSheet, Dimensions, StatusBar } from "react-native";
const screen = Dimensions.get("screen").height 
const styles = StyleSheet.create({
  container: {
    // minHeight: Dimensions.get("screen").height,
    height: Dimensions.get("screen").height,
    flex: 1,
    flexDirection: "column",
    display:"fixed"
  },
  header: {
   
    paddingTop: StatusBar.currentHeight,
    minHeight: screen*0.15,
    maxHeight:"15%",
    justifyContent: "center",
    alignItems: "center",
  //  marginBottom:5,
    backgroundColor: "#2B2E35",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2B2E35",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#84c6f8",
    padding: 10,
    
    margin: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#7c7676",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  messageText: {
    color: "white",
  },
  
  footer: {
    paddingBottom: 8,
    height: "10%",
    backgroundColor: "#2B2E35",
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },

  footercontent: {
    flex: 1,
    MinHeight:screen*0.15,
    marginBottom:1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  TextInput: {
    flex: 1,
    height: "100%",
    color: "white",
    // outline: "none",
    marginRight: 8, // Add some margin between TextInput and Pressable
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    height: "80%",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 8,
    aspectRatio: 1,
    borderRadius:10,
  }
});

export default styles;
