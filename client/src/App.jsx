import React, { useEffect, useState } from 'react';
import './App.css';
import Chatbox from "./components/Chatbox"
import io from "socket.io-client"

function App() {
  const socket = io("http://localhost:5000")
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");
  const joinroom = () => {
    if (username !== "" && room !== "") {
      socket.emit("joined_room", room)
    }

  }
  const onusername = (e) => {
    e.preventDefault();
    setusername(e.target.value)
  }
  const onroomname = (e) => {
    e.preventDefault();
    setroom(e.target.value)
  }
  return (
    <>
      <input type="text" name="input1" onChange={onusername} placeholder='enter username' id="" />
      <input type="text" name="input1" onChange={onroomname} placeholder='enter room' id="" />
      <button onClick={joinroom} type="submit" > join room</button>
      <Chatbox room={room} socket={socket} username={username} />
    </>
  )
}

export default App;
