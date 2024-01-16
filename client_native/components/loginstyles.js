import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"
export default styles = StyleSheet.create({
    signcontainer: {
      elevation:20,
      flex:1,
      height: Dimensions.get("screen").height,
      // maxWidth:Dimensions.get("screen").width,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
       maxWidth: 430,
      // width: '70%',
      backgroundColor: '#050404',
      // borderRadius: 7,
      shadowColor: '#212121',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      padding: 20,
    },
    form: {
      borderRadius:20,
      shadowRadius:10,
      shadowOpacity:0.9,
      elevation:100,
      shadowColor:"green",
      shadowOffset:{
        height:0,width:0},
      backgroundColor:"#fff",
      width:"70%",
      padding: 20,
      shadowColor: '#212121',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      elevation:20
  
    },
    header: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 15,
    },
    input: {
      height: 60,
      maxWidth: '100%',
      padding: 10,
      fontSize: 17,
      marginBottom:13,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    button: {
      backgroundColor: '#212121',
      fontSize: 17,
      fontWeight: '500',
      letterSpacing: 1,
      marginTop: 17,
      alignItems: 'center',
      width: '80%',
      marginLeft: '10%',
      paddingVertical: 10,
    },
    signup: {
      fontSize: 17,
      textAlign: 'center',
      marginTop: 20,
    },
    signupText: {
      color: '#212121',
    },
})
  