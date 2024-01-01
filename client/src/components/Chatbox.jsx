import { React, useState, useEffect } from 'react';
import "./chatbox.css";
import { io } from "socket.io-client";

function Chatbox(props) {
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

  const [currentmessage, setmessage ] = useState("")
  const onchange = (e) => {
    e.preventDefault();
     setmessage(e.target.value) 
  }
  const sendmessage = async () => {
    if (currentmessage !== "") {
      const messagedata = {
        room: room,
        author: username,
        message: currentmessage,
      }
       socket.emit("sendmessage", messagedata)
      
    }
  }
  useEffect(()=>{
    socket.on("recievedmessage",(data=>{
      console.log(data)
    }))
  },[socket])
  return (
    <>

      <div className='header'></div>
      <div className='body'>
      <>
      <input type="text" name="input1" onChange={onusername} placeholder='enter username' id="" />
      <input type="text" name="input1" onChange={onroomname} placeholder='enter room' id="" />
      <button onClick={joinroom} type="submit" > join room</button>
      <Chatbox room={room} socket={socket} username={username} />
    </>
      </div>
      <div className='footer'>
        <input type="text" onChange={onchange} name="" id="" placeholder='live chat' />
        <button onClick={sendmessage} type="button"> &#9658;</button>
      </div>
    </>
  );
}

export default Chatbox
