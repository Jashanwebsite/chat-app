// Roomstate.jsx
import { Api_key } from "@env";
import React, { useState } from "react";
import Roomcontext from "./roomcontext.jsx";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

function roomstate(props) {
  const apiKey = "https://chat-backend-6h01.onrender.com"; //process.env.Api_key || Constants.manifest.secrets.apiKey;
  const host = apiKey;
  const [selectedroomid,setselectedroomid]= useState(null)
  const [room, setrooms] = useState([]);
  const [user_id, setuserid] = useState("");
  const [room_messages, setroom_messages] = useState([]);
  const fetchroom = async () => {
    try {
      const response = await fetch(`${host}/room/findroom`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: await AsyncStorage.getItem("chat"),
        },
      });
      const json = await response.json();
      setuserid(await AsyncStorage.getItem("user_id"))
      setrooms(json);
    } catch (error) {
      console.log(error);
    }
  };
  const join_room = async (room_id) => {
    // //console.log(requestBody);
    const response = await fetch(`${host}/room/joinroom`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        token: await AsyncStorage.getItem("chat"),
      },
      body: JSON.stringify({ room_id: room_id }),
    });
    const json = await response.json();
    setrooms(room.concat(json));
  };

  const fetchmessages = async (room_id) => {
    // //console.log(room_id)
    const response = await fetch(`${host}/messages/fetchmessages`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        token: await AsyncStorage.getItem("chat"),
      },
      body: JSON.stringify({ room_id }),
    });
    const json = await response.json();
    setroom_messages(json);
    console.log(user_id)
  };
  const addmessages = async (to, message) => {
    //console.log(to)
    const response = await fetch(`${host}/messages/addmessages`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        token: await AsyncStorage.getItem("chat"),
      },
      body: JSON.stringify({ to: to, message: message }),
    });
    const json = await response.json();
    setroom_messages((prevMessages) => [...prevMessages, json]);
    setuserid(json.from)
  };

  return (
    <Roomcontext.Provider
      value={{
        fetchroom,
        join_room,
        room,
        setrooms,
        fetchmessages,
        room_messages,
        user_id,
        selectedroomid,
        setselectedroomid,
        addmessages,
      }}
    >
      {props.children}
    </Roomcontext.Provider>
  );
}
export default roomstate;
