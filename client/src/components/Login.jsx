import React from 'react'
import { useState } from 'react';
import "./login-signup.css"
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate("")
  const host = "http://localhost:5000"
  const [credential, setcredentials] = useState({ email: "", password: "" })
  const handelclick = async (e) => {
    // setloder(true)
    e.preventDefault();
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "email": credential.email, "password": credential.password }),
    });
    const json = await response.json()

    if (json.token) {
      localStorage.setItem("token", json.token)
      // setloder(false)
      // navigate("/home")
      localStorage.setItem("chat-token",json.token)
      navigate("/chat")
     
    } else {
      // setloder(false)
      alert("please enter valid details")

    }
  }
  const onchange = (e) => {
    setcredentials({ ...credential, [e.target.name]: e.target.value })
    // console.log(credential)

  }

  return (<>
    {/* {loder && <Loder></Loder>} */}
    <div className="signcontainer">
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input onChange={onchange} value={credential.email} name="email" id="email" type="email" placeholder="Enter your email" />
          <input onChange={onchange} value={credential.password} type='password' name="password" id="password" placeholder="Enter your password" />
          <input type="button" className="button" onClick={handelclick} value="Login" />
        </form>
        <div className="signup">
          <span className="signup">Don't have an account?
            <Link to={"/Signup"}><div>Signup</div></Link>
          </span>
        </div>
      </div>
    </div>
  </>



  )
}

export default Login
