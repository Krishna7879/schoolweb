import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
const Header = () => {
    const [btnstate,setbtnstate]=useState(false)
    const HandleMenubtn=()=>{
        setbtnstate(btnstate=>!btnstate)
    }
    const toggleClass=btnstate ? 'active':'';


    return (
        <header className="header">

            <NavLink to="/" className="logo"> <i className="fas fa-lightbulb"></i> educa </NavLink>

            <nav className={`navbar ${toggleClass}`}>
                <div id="close-navbar" onClick={HandleMenubtn} className="fas fa-times"></div>
                <NavLink to="/">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/courses">courses</NavLink>
                <NavLink to="/contact">contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/logout">Logout</NavLink>

            </nav>

            <div className="icons">
                <div id="account-btn" className="fas fa-user"></div>
                <div id="menu-btn" onClick={HandleMenubtn} className="fas fa-bars"></div>
            </div>

        </header>
    )
}
export default Header