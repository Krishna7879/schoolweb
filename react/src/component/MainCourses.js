import React from 'react'
import { NavLink } from 'react-router-dom'
import course1 from './Coursesimg/course-2-1.jpg'
import course2 from './Coursesimg/course-2-2.jpg'
import course3 from './Coursesimg/course-2-3.jpg'
import course4 from './Coursesimg/course-2-4.jpg'
import course5 from './Coursesimg/course-2-5.jpg'
import course6 from './Coursesimg/course-2-6.jpg'
import course7 from './Coursesimg/course-2-7.jpg'
import course8 from './Coursesimg/course-2-8.jpg'
import course9 from './Coursesimg/course-2-9.jpg'

const MainCourses = () => {

    return (
        <section className="courses">

            <h1 className="heading"> our famous courses </h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={course1} alt="" />
                        <h3>development</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={course2} alt="" />
                        <h3>engineering</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={course3} alt="" />
                        <h3>mathemetics</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={course4} alt="" />
                        <h3>doctor</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={course5} alt="" />
                        <h3>science</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={course6} alt="" />
                        <h3>business</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box hide">
                    <div className="image">
                        <img src={course7} alt="" />
                        <h3>teaching</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box hide">
                    <div className="image">
                        <img src={course8} alt="" />
                        <h3>designing</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box hide">
                    <div className="image">
                        <img src={course9} alt="" />
                        <h3>dancing</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <NavLink to="/" className="btn">read more</NavLink>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

            </div>

          

        </section>

    )
}
export default MainCourses