import style from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Socket } from "./socket";
import {login_room_id} from "./state/action-creators/index"
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  Pressable,
  Alert,
  StatusBar,
  SafeAreaView,
  Button,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import roomcontext from "./context/roomcontext";
import { useDispatch } from "react-redux";

const LayoutSlider = ({ navigation }) => {
  const [joinrooms, setjoinroom] = useState("");
  const context = useContext(roomcontext);
  const {
    selectedroomid,
    setselectedroomid,
    room,
    join_room,
    fetchroom,
  } = context;
  const socket = Socket;
  //  for joining room  ---------------------------------------------------------------------------------------
  const handeljoinclick = (e) => {
    e.preventDefault();
    join_room({ room_id: joinrooms });
  };
  
  const despatch = useDispatch();
  //  handel   click for joining room and other functions  ---------------------------------------------
  const handelmessageclick = (room_id) => (e) => {
  e.preventDefault();
  // setselectedroomid(room_id);
  // socket.emit("joined_room", room_id);
  console.log("room_id", room_id)
  despatch(login_room_id(room_id))
   navigation.navigate("Chat");
};
  //  use effect for fetchroom
  useEffect(() => {
    fetchroom();
    console.log( "room",room);
  }, []);

  const [islisthover, setislisthover] = useState(null);
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          await AsyncStorage.removeItem("chat").then((res) => {
            console.log(res);
          });
          console.log("toen renoved");
          navigation.navigate("login");
        },
      },
    ]);

  return (
    <SafeAreaView>
      <View style={{ ...style.layout, paddingTop: StatusBar.currentHeight }}>
        <View style={style.slider}>
          <View style={style.slider_header}>
            <View style={style.slider_button_header}>
              <View style={style.slider_button_header.image}>
                <Image
                  style={style.slider_button_header.image}
                  source={require("../components/chat-app-design.jpg")}
                />
              </View>
              <TouchableOpacity
                onPress={createTwoButtonAlert}
                style={style.slider_button_header.text_view}
              >
                <Text style={style.slider_button_header.text_view.text}>
                  jashan._17
                </Text>
              </TouchableOpacity>
              {/* <DropdownComponent></DropdownComponent> */}
            </View>
            <Pressable style={style.slider_search_header}>
              <Text>search</Text>
            </Pressable>
          </View>
          <View style={style.slider_inbox_header}>
            <Text style={style.slider_inbox_header.slider_text_header}>
              Inbox
            </Text>
          </View>
          <View style={style.slider_joinroom_button}>
            <LinearGradient
              style={style.slider_joinroom_button.joinroom_button}
              colors={["#84c6f8", "#6498fc", "#4d75fe"]}
              start={{ x: 0.1, y: 0.5 }}
            >
              <TextInput
                style={style.slider_joinroom_button.joinroom_button.text}
                placeholder="Join room"
              ></TextInput>
            </LinearGradient>
            <Pressable style={style.slider_joinroom_button.create_button}>
              <Text style={style.slider_joinroom_button.create_button.text}>
                +
              </Text>
            </Pressable>
          </View>
          <View style={style.listContainer}>
            <FlatList
              data={room}
              keyExtractor={(item) => item.room_id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={handelmessageclick(item.room_id)}
                  style={
                    !islisthover
                      ? style.listContainer.list
                      : { ...style.listContainer.list, ...style.hover }
                  }
                >
                  <View style={style.list_top}>
                    <Image
                      fadeDuration={500}
                      style={style.list_top.image}
                      source={require("./chat-app-design.jpg")}
                    ></Image>
                  </View>

                  <View style={style.list_middle}>
                    <Text style={style.list_middle.text}>{item.username}</Text>
                    <Text style={style.list_middle.text_bottom}>
                      {item.room_id}
                    </Text>
                  </View>
                  <View style={style.list_bottom}>
                    <Text style={style.list_bottom.text}>2m</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={style.footer}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LayoutSlider;

// const on_list_hover_end = () => {
//   setislisthover(null);
// };
// const on_list_hover_start = (itemId) => {
//   setislisthover(itemId);
// };
