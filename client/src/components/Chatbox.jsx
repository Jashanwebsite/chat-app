import { React, useState, useEffect } from 'react';
import "./chatbox.css";
import { io } from "socket.io-client";

function Chatbox() {
  const [newmessage, setmessage] = useState("");

  const appendyou = (message) => {
    const messages_content = document.getElementById("messages-content");
    const message_new = document.createElement("div");
    message_new.innerHTML = message;
    message_new.classList.add("message");
    message_new.classList.add("new");
    messages_content.append(message_new);
  };

  const appendMe = (message) => {
    const messages_content = document.getElementById("messages-content");
    const message_new = document.createElement("div");
    message_new.innerHTML = message;
    message_new.classList.add("message");
    message_new.classList.add("message-personal");
    messages_content.append(message_new);
  };
  const socket = io('http://localhost:5000');

  
  const handleSendMessage = (e) => {
    e.preventDefault();
    const textarea = document.getElementById('message-input');
    const newMessage = textarea.value; 
    socket.emit('user-joined', {newMessage:"newMessage"});
    // appendyou(newMessage)
  }; 
  

  useEffect(()=>{
    socket.on('message', (receivedMessage) => {
      console.log(receivedMessage)
      appendyou(receivedMessage.message)
    });
  },[socket])
    
    return (
        <>

            <div className="chat">
                <div className="chat-title">
                    <h1>Fabio Ottaviani</h1>
                    <h2>Supah</h2>
                    <figure className="avatar">

                    </figure>
                </div>
                <div className="messages">
                    <div className="messages-content" id='messages-content'>
                        {/* <div className="message message-personal"></div>
                        <div className="message new"></div> */}
                    </div>
                </div>
                <div className="message-box">
                    <textarea type="text" id='message-input' className="message-input" placeholder="Type message..."></textarea>
                    <button type="submit" onClick={handleSendMessage} className="message-submit">Send</button>
                </div>
                {/* <div className="slide-bar">
                    <label for="opacity-slider">Background Opacity</label>
                    <input type="range" id="opacity-slider" min="0" max="1" step="0.1" value="0.5" />
                </div> */}
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Chatbox
