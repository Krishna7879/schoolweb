import React from "react"
import { NavLink } from "react-router-dom"
const CoursesHeadlinglink = () => {
    return (
        <section className="heading-link">
            <h3>our courses</h3>
            <p> <NavLink to="/">home</NavLink> / courses </p>
        </section>
    )
}
export default CoursesHeadlinglink