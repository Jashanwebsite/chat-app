import React, { useEffect, useState } from 'react';
import './App.css';
import Chatbox from "./components/Chatbox"
import Login from "./components/Login"
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
       <Route path={'/login'} element={  <Login/> }/>
       <Route path={'/Signup'} element={  <Signup/> }/>
      {localStorage &&<Route path={'/chat'}   element={  <Chatbox/> }/>}
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;
