import React from 'react'
// import { useContext } from 'react';
// import noteContext from '../Context/Notecontext';
import { useState } from 'react';
import "./login-signup.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
// import Loder from './Loder';
function Signup() {
//    const context = useContext(noteContext);
//    const {loder ,  setloder}= context;
    let navigate = useNavigate("")
    const host = "http://localhost:5000"
   const[credential,setcredentials] =  useState({email:"",password:"",name:""})
    const handelclick = async(e) => {
      // setloder(true)
        e.preventDefault();
        const response = await fetch(`${host}/auth/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"email":credential.email,"name":credential.name,"password":credential.password}),
          });
          const json = await response.json()
          if (json.token){
            console.log(json.token)
            navigate("/login")
          }else{
            console.log("error in signup in signup.jsx")
          }// setloder(false)
      }
      const onchange = (e) => {
        setcredentials({ ...credential, [e.target.name]: e.target.value })
      }
  return (<>
         {/* {loder && <Loder></Loder>} */}
    <div className="registration signcontainer form">
      <header>Signup</header>
      <form action="#">
        <input  onChange={onchange} value={credential.name} name="name" id="name" type="text" placeholder="Enter your name"/>
        <input  onChange={onchange} value={credential.email} name="email" id="email" type="email"  placeholder="enter your email"/>
        <input  onChange={onchange} value={credential.password} name="password" id="password" type="password" placeholder="enter your password"/>
        <input type="button" onClick={handelclick} className="button" value="Signup"/>
      </form>
      <div className="signup">
        <span className="signup">already have an account? <Link className='loginbutton text-slate-900' to={"/login"}>login</Link>
        </span>
      </div></div></>
    )

}


export default Signup
