// Header.js

import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import headerStyles from "./HeaderStyle";
import Roomcontext from "./context/roomcontext";
import { useNavigation } from "react-router-native";
import { useSelector } from "react-redux";

const Header = ( props ) => {
  const {navigation,room_id} = props
  // const navigate = useNavigation();
  const context = useContext(Roomcontext);
  const [room,setroom_id] = useState(null);
  const { setselectedroomid ,selectedroomid} = context;
  // const room_id = useSelector((state)=>{state.room.room_id})
  useEffect(()=>{
    console.log("header room_id",room_id)
    setroom_id(room_id)
  },[room_id])



  return (
    <View style={headerStyles.container}>
      {/* Back Arrow */}
      <View style={headerStyles.backButtonContainer}>
        <TouchableOpacity
          onPress={async() => {
            setselectedroomid(null);
           await navigation.navigate("Chat") // Use goBack to navigate back
            console.log(selectedroomid);
          }}
        >
          <Text style={headerStyles.backButtonContainer.text}> {"<-"} </Text>
        </TouchableOpacity>
      </View>

      {/* Center Section with Image and Name */}
      <View style={headerStyles.centerContainer}>
        {/* Circle Border Image */}
        <View style={headerStyles.profileImageContainer}>
          {/* Replace the source with your image */}
          <Image
            source={require("./chat-app-design.jpg")}
            style={headerStyles.profileImage}
          />
        </View>

        {/* Name */}
        <Text style={headerStyles.nameText}>{room}</Text>
      </View>

      {/* Phone Icon Placeholder */}
      <View style={headerStyles.phoneIconContainer}>
        <TouchableOpacity onPress={() => console.log("Phone icon pressed")}>
          <Text style={{ fontSize: 20, color: "blue" }}>📞</Text>
        </TouchableOpacity>
      </View>

      {/* Three Vertical Dots */}
      <View style={headerStyles.threeDotsContainer}>
        <TouchableOpacity onPress={() => console.log("Three dots pressed")}>
          {/* Replace the source with your three dots icon image */}
          <Image
            source={require("./chat-app-design.jpg")}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
