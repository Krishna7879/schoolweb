import React from "react"
import { NavLink } from 'react-router-dom'
const AboutHeadlinglink = () => {
    return (
        <section className="heading-link">
            <h3>about us</h3>
            <p> <NavLink to="/">home</NavLink> / about </p>
        </section>
    )
}
export default AboutHeadlinglink