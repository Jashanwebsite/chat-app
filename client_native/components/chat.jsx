import React, { useState, useEffect, useRef, useContext } from "react";
// todo check socket connection , send message not woring ,add morefunctionality
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";
import styles from "./chatstyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";
import Roomcontext from "./context/roomcontext";
import { Socket } from "./socket";
import { useSelector } from "react-redux";

const ChatMessage = ({ navigation }) => {
  const room_id = useSelector((state) => state.room.room_id);
  const context = useContext(Roomcontext);

  const [username,setusername] = useState("")
  const {
    room_messages,
    addmessages,
    user_id,
    fetchmessages,
    setuserid,
  } = context;
  const socket = Socket;
  const [message,setmessage] = useState(room_messages)
    const [newmessage, setnewmessage] = useState({
      user : user_id,
      message : newmessage,
      room_id : room_id,
      username: username
    });
    const [userroom_id, setroom_id] = useState(null);

  const datamessage ={
    user : user_id,
    message : newmessage,
    room_id : room_id,
    username: username
  }
  const handelsendmessage=async(e)=>{
    setmessage(...room_messages,newmessage)
     console.log(message,room_id)
     socket.emit("sendmessage", datamessage )
  }

  useEffect(() => {
    socket.on("recievedmessage", ((datamessage)=> {
      console.log(room_messages)
      console.log(datamessage)
      addmessages(datamessage.room_id,datamessage.message)
    }))
    return function cleanup() {
      socket.removeListener("recievedmessage");}
}, [socket])
  //  use effect for fetching messages --------------------------------------------------------------
  useEffect(() => {
    const fetchmessage = async () => {
      // console.log("state", room_id);
      setroom_id(room_id);
      setusername(await AsyncStorage.getItem("username"))
      await fetchmessages(room_id);
      // console.log(`fetching messages end with id ${room_id}}`)
    };
    fetchmessage();
  }, [room_messages]);
//  to get user id and other function --------------------------------------------------------------------------
  useEffect(() => {
    const getid = async () => {
      const storedUserIdString = await AsyncStorage.getItem("user_id");
      const storedUserId = JSON.parse(storedUserIdString);
      setuserid(storedUserId);
    };
    getid();

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        const keyboardHeight = event.endCoordinates.height;
        console.log("Keyboard height:", keyboardHeight);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const ref = useRef();

  useEffect(() => {
    ref.current.scrollToEnd({ animated: false });
  }, [newmessage]);

  const renderItem = ({ item }) => (
    <View
      style={item.from === user_id ? styles.userMessage : styles.otherMessage}
    >
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} room_id={userroom_id} />
      </View>
      <FlatList
        ref={ref}
        data={room_messages}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 80} // Adjust as needed
        contentContainerStyle={styles.content}
      />
      <View style={styles.footer}>
        <InsetShadow
          containerStyle={styles.footercontent}
          top={true}
          shadowOpacity={1}
          elevation={10}
          shadowRadius={100}
          bottom={false}
          shadowColor={"white"}
        >
          <TextInput
            onChangeText={(text) =>{ setnewmessage(text); }
             
            }
            spellCheck={true}
            placeholderTextColor={"white"}
            style={styles.TextInput}
            placeholder="Enter message"
          />
          <LinearGradient

            onTouchEnd={() => (newmessage.message === "" ? null : handelsendmessage())}
            colors={["#84c6f8", "#6498fc", "#4d75fe"]}
            start={{ x: 0.1, y: 0.5 }}
            style={styles.button}
          >
            <Text>Send</Text>
          </LinearGradient>
        </InsetShadow>
      </View>
    </SafeAreaView>
  );
};

export default ChatMessage;
