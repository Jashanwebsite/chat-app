import { React, useState, useContext, useEffect } from 'react';
import "./chatbox.css";
// import { io } from "socket.io-client";
import roomcontext from '../context/roomcontext';
function Chatbox(props) {
  const [joinrooms, setjoinroom] = useState("")
  const [user_id, setuser_id] = useState("")
  const [message,setmessage]=useState("")
  // const socket = io("http://localhost:5000")
  const context = useContext(roomcontext)
  const { room, join_room, fetchroom, fetchmessages, room_messages,addmessages } = context;
  const [roomid, setroomid] = useState("");

  const handeljoinclick = () => {
    console.log("joinrooms")
    join_room({ room_id: joinrooms })
  }
  const handelsendmessage=()=>{
    console.log(message,roomid)
    addmessages(roomid,message)
  }
  const handelmessageclick = (room_id,user_id) => () => {
    setroomid(room_id);
    setuser_id(user_id)
    fetchmessages(room_id);
  };
  useEffect(() => {
    fetchroom();
  },
    [])

  return (
    <>
      <div className="chat-container">
        <div className="sidebar">
          <div className="search-container">
            <input className="search-input" type="text" onChange={(e) => { setjoinroom(e.target.value); }} placeholder="enter room id to join" />
            <button type="button" onClick={handeljoinclick} className='join_room_button'>&#10003;</button>
          </div>
          <div className="person-list">
            <ul className="persons">
              {room.map && room.map((room1) => {
                return (
                  
                  <li onClick={handelmessageclick(room1.room_id,room1.user_id)} className="person-name">
                    {room1.room_name}
                  </li>)
              })}
              {/* <li className="person-name" ></li> */}
            </ul>
          </div>
        </div>
        {roomid && <div className="chat-section d-none" id="chat-section">
          <div className="header"></div>
          <div className="body">
            <ul className="messages">
              {room_messages.map && room_messages.map((room_messages1) => {
                return <li className = {`message ${user_id == room_messages1.from ?  "right":""}`} id="message">{room_messages1.message}</li>
              })}

              {/* <li className="message right" id="message">hlobro</li> */}
            </ul>
          </div>
          <div className="footer">
            <div className="footer-content">
              <input type="text" name="" onChange={(e) => { setmessage(e.target.value); }} placeholder="enter your message" id="sendbar" />
              <button onClick={handelsendmessage} className="button" role="button">send</button>
            </div>

          </div>
        </div>}
      </div>
    </>
  );
}
{/* <div className='header'></div>
<div className='body'>
<input type="text" name="input1" onChange={onusername} placeholder='enter username' id="" />
<input type="text" name="input1" onChange={onroomname} placeholder='enter room' id="" />
<button onClick={joinroom} type="submit" > join room</button>
</div>
<div className='footer'>
  <input type="text" onChange={onchange} name="" id="" placeholder='live chat' />
  <button onClick={sendmessage} type="button"> &#9658;</button>
</div> */}

export default Chatbox
// start joiroom function      socket.emit("joined_room", room)
//  for sending data  socket.emit("sendmessage", messagedata)
// useEffect(() => {
//   socket.on("recievedmessage", (data => {
//     console.log(data)
//   }))
// }, [socket])
