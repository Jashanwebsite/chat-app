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

<body>
    <div class="chat-container">
        <div class="sidebar">
            <div class="search-container">
                <input class="search-input" type="text" placeholder="Search"/>
            </div>
            <div class="person-list">
                <ul class="persons">
                    <li class="person-name" onclick="classlist();">Jashhahsgabgl̥han</li>
                    <li class="person-name" onclick="classlist();">Jashan</li>
                  
                </ul>
            </div>
        </div>
        <div class="chat-section" id="chat-section">
            <div class="header"></div>
            <div class="body">
                <ul class="messages">
                    <li class="message" id="message">hlo</li>
                
                    <li class="message right" id="message">hlobro</li>
                </ul>
            </div>
            <div class="footer">
                <div class="footer-content">
                    <input type="text" name="" placeholder="enter your message" id="sendbar" />
                    <button class="button"   role="button">send</button>
                </div>
               
            </div>
        </div>
    </div>
    {/* <script>
        var chat_section = document.getElementById("chat-section")
        const classlist = () => {
            if(!chat_section.classList.contains("d-none")){
                chat_section.classList.add("d-none")
            }
            
            // console.log(chat_section.classList)
        }
    </script> */}
</body>
    </>
  );
}

export default Chatbox
