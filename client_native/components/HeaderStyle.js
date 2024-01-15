// HeaderStyles.js

import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    borderColor:"transparent",
    shadowColor: "#b1a2a2",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    height:"100%",
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButtonContainer: {
    width: '10%',
    height:"100%",
    display:"flex",
    alignItems: 'center',
    justifyContent:"center",
    text:"center"
    ,text:{
      display:"flex",
      fontSize:30,
      fontWeight:"500",
      justifyContent:"center",
      alignItems:"center",
      color:"white"
    }
  },
  centerContainer: {
    width: '60%',
    height:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
  phoneIconContainer: {
    width: '10%',
    alignItems: 'flex-end',
    display:"flex",
    justifyContent:"center",
    alignContent:"center"
  },
  threeDotsContainer: {
    width: '10%',
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    alignItems: 'flex-end',
  },
});

export default headerStyles;

// ./chat-app-design.jpg