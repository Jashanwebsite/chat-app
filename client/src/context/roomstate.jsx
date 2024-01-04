// Roomstate.jsx
import React, { useState } from 'react'
import roomcontext from './roomcontext.jsx';
function roomstate(props) {
  const [room,setrooms] = useState([])
  const [user_id,setuserid]=useState("")
  const [room_messages,setroom_messages] = useState([])
  const fetchroom = async()=>{
    const response = await fetch("http://localhost:5000/room/findroom",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "token": localStorage.getItem("token")
      }
    })
    const json = await response.json();
    //console.log(json)
    setuserid(json.user_id)
    setrooms(json)
  }
    const join_room = async(room_id) => {
        // //console.log(requestBody);
       const response = await fetch("http://localhost:5000/room/joinroom",{
        method: "Post",
        headers: {
          "Content-Type":"application/json",
          "token": localStorage.getItem("token"),
        },body: JSON.stringify({room_id:room_id})
        
      })
      const json = await response.json();
      setrooms(room.concat(json))
      };    

      const fetchmessages = async(room_id)=>{
        // //console.log(room_id)
        const response = await fetch("http://localhost:5000/messages/fetchmessages",{
          method: "Post",
          headers: {
            "Content-Type":"application/json",
            "token": localStorage.getItem("token"),
          },body: JSON.stringify({room_id})
        })
        const json = await response.json();
        setroom_messages(json)
      }
      const addmessages = async(to,message)=>{
        //console.log(to)
        const response = await fetch("http://localhost:5000/messages/addmessages",{
          method: "Post",
          headers: {
            "Content-Type":"application/json",
            "token": localStorage.getItem("token"),
          },body: JSON.stringify({to:to,message:message})
        })
        const json = await response.json();
        setroom_messages(prevMessages => [...prevMessages, json]);       
      }

      return (
        <roomcontext.Provider value={{fetchroom,join_room,room,setrooms,fetchmessages,room_messages,user_id,addmessages}}>
          {props.children}
        </roomcontext.Provider>
      );

}
export default roomstate


