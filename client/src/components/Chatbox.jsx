import { React, useState, useEffect } from 'react';
import "./chatbox.css";
import { io } from "socket.io-client";

function Chatbox(props) {
  const {socket,room,username} = props;
  // const socket = io('http://localhost:5000');
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
      <div className='body'></div>
      <div className='footer'>
        <input type="text" onChange={onchange} name="" id="" placeholder='live chat' />
        <button onClick={sendmessage} type="button"> &#9658;</button>
      </div>
    </>
  );
}

export default Chatbox
