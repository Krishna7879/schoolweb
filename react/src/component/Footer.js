import React from "react"
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3> <i className="fas fa-lightbulb"></i> educa </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
                    <div className="share">
                        <NavLink to="/" className="fab fa-facebook-f"></NavLink>
                        <NavLink to="/" className="fab fa-twitter"></NavLink>
                        <NavLink to="/" className="fab fa-instagram"></NavLink>
                        <NavLink to="/" className="fab fa-linkedin"></NavLink>
                    </div>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <NavLink to="/" className="link">home</NavLink>
                    <NavLink to="/about" className="link">about</NavLink>
                    <NavLink to="/courses" className="link">courses</NavLink>
                    <NavLink to="/contact" className="link">contact</NavLink>
                </div>

                <div className="box"> 
                    <h3>useful links</h3>
                    <NavLink className="link">help center</NavLink>
                    <NavLink className="link">ask questions</NavLink>
                    <NavLink className="link">send feedback</NavLink>
                    <NavLink className="link">private policy</NavLink>
                    <NavLink className="link">terms of use</NavLink>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest upadates</p>
                    <form>
                        <input type="email" name="" placeholder="enter your email" id="" className="email" />
                        <input type="submit" value="subscribe" className="btn" />
                    </form>
                </div>

            </div>

            <div className="credit"> created by <span>mr.krishna</span> | all rights reserved! </div>

        </section>
    )
}

export default Footer