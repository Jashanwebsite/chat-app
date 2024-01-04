import React, { useEffect, useState } from 'react';
import './App.css';
import Chatbox from "./components/Chatbox"
import Login from "./components/Login"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Roomstate from './context/roomstate.jsx';

function App() {

  return (
    <>
      <Roomstate>
        <BrowserRouter>

          <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/Signup'} element={<Signup />} />
            {localStorage && <Route path={'/home'} element={<Chatbox />} />}
          </Routes>

        </BrowserRouter>
      </Roomstate>

    </>
  )
}

export default App;
