import React, { useState, useEffect, useRef, useContext } from "react";
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
  const socket = Socket;
  const context = useContext(Roomcontext);
  const {
    selectedroomid,
    room_messages,
    addmessages,
    user_id,
    fetchmessages,
    setuserid,
  } = context;

  const [newmessage, setnewmessage] = useState({
    id: "",
    message: "",
    sender: "",
  });

  const data = room_messages;
  const [userroom_id, setroom_id] = useState(null);
  const room_id = useSelector((state) => state.room.room_id);
  useEffect(() => {
    const fetchmessage = async () => {
      console.log("state", room_id);
      setroom_id(room_id);
      console.log(`fetching messages start with id ${room_id}`)
      await fetchmessages(room_id);
      console.log(`fetching messages end with id ${room_id}}`)
    };
    fetchmessage();
  }, [room_id]);

  useEffect(() => {
    const getid = async () => {
      const storedUserIdString = await AsyncStorage.getItem("user_id");
      const storedUserId = JSON.parse(storedUserIdString);
      setuserid(storedUserId);
      // console.log( "selected room id ",selectedroomid)
      // fetchmessages(selectedroomid);
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

  const onclick = () => {
    addmessages(selctedroomid, newmessage.message);
    setnewmessage({ id: "", message: "", sender: "" });
  };

  useEffect(() => {
    ref.current.scrollToEnd({ animated: false });
  }, [data]);

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
        data={data}
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
            onChangeText={(text) =>
              setnewmessage({ id: "10", message: text, sender: "user" })
            }
            spellCheck={true}
            placeholderTextColor={"white"}
            style={styles.TextInput}
            placeholder="Enter message"
          />
          <LinearGradient
            onTouchEnd={() => (newmessage.message === "" ? null : onclick())}
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
