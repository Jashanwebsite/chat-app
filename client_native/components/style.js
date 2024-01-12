import { Dimensions, StyleSheet } from "react-native";
const dimention =Dimensions.get("screen")
const style = StyleSheet.create({
  layout: {
    minHeight: dimention.height + 10,
    width: "100%",
    backgroundColor: "#212121",
    flex: 1,
    flexDirection: "row",
  },
  slider: {
    // marginTop: 36,
    height: "100%",
    flex: 1,
    backgroundColor: "#2a2d34",
    // boxShadow:"inset 0px 20px 20px #474e56",
  },
  slider_header: {
    paddingHorizontal: "8%",
    marginTop: "8%",
    height: "8%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  slider_button_header: {
    backgroundColor: "#2B2E35",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    aspectRatio: 1,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 27,
    elevation: 8,
    borderRadius: 20,
  },
  slider_search_header: {
    shadowColor: "#f7eeee",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 27,
    elevation: 8,
    backgroundColor: "#2B2E35",
    alignSelf: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 20,
  },
  slider_inbox_header: {
    height: 70,
    marginTop: "2%",
    paddingLeft: "3%",
    // backgroundColor:"red",
    width: "100%",
    slider_text_header: {
      height: "100%",
      color: "#ccc0c0",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: 50,
      textAlign: "auto",
    },
  },
  slider_joinroom_button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2%",
    // backgroundColor: "#7e3030",
    paddingHorizontal: "4%",
    height: "8%",
    width: "100%",
    joinroom_button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "70%",  // Adjusted width
      borderRadius: 20,
      text: {
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 20,
      },
    },
    create_button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "90%",
      width: "20%",
  
      aspectRatio: 1,
      borderRadius:25 ,
      backgroundColor: "#2B2E35",  // Red color
      shadowColor: "#f7eeee",
      shadowOffset: {
        width: -4,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      elevation: 15,
      text:{
        fontWeight:"light",
        color:"#dbd3d3",
        fontSize:30
      }
    },
  },  listContainer: {
    marginTop:"2%",
    flex: 1, 
    width: "100%",
    list:{
      marginVertical:"2%",
      height:"10%",
      width:"100%",
      display:"flex",
      flexDirection:"row"
    }
  },
  list_top:{
    height:"100%",
    width:"15%",
    
    image:{
      height:"100%",
      width:"100%",
      borderRadius:100
    }
  },
  list_middle:{
    height:"100%",
    width:"70%",
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"column",
    paddingHorizontal:"2%",
    justifyContent:"center",
    alignItems:"flex-start"
    ,text:{
      display:"flex",
      paddingTop:"2%",
      justifyContent:"center",
      alignItems:"flex-start",
      width:"100%",
      fontWeight:"500",
      height:"50%",
      color:"#dbd5d5"
    },
    text_bottom:{
      height:"50%",
      width:"100%",
      color:"white",
      fontWeight:"200"
    }
  },
  list_bottom:{
    height:"100%",
    width:"15%",
    // backgroundColor:"#000000",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    text:{
      color:"white",
      fontWeight:500,
      fontSize:12
    }
  },
  hover:{
    opacity:0.5,
  }

});
export default style;
