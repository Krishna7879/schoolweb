import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactHeadlinglink = () => {
    return (

        <section className="heading-link">
            <h3>contact us</h3>
            <p> <NavLink to="/">home</NavLink> / contact </p>
        </section>

    )
}
export default ContactHeadlinglink