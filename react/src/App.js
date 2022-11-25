
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Courses from './component/Courses';
import React from 'react';
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Logout from "./component/Logout"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/courses' element={<Courses />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/signup' element={<Signup />} />
        <Route  path='/logout' element={<Logout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
