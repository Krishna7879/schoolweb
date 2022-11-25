import React from "react"
import { NavLink } from 'react-router-dom'
import './Firstsection.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Firstsection = () => {


    return (
        <section className="home">



            <div className="swiper home-slider">

                <div className="swiper-wrapper">
                <Swiper
                pagination={{
                    type: "progressbar",
                }}
                
                navigation={true}
                speed={1000}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <section className="swiper-slide slide" id="Homeslide1">
                        <div className="content">
                            <h3>the best courses you will find find here!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                            <NavLink to="/" className="btn">get started</NavLink>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>

                <section className="swiper-slide slide" id="Homeslide2" >
                        <div className="content">
                            <h3>the best courses you will find find here!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                            <NavLink to="/" className="btn">get started</NavLink>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>

                <section className="swiper-slide slide" id="Homeslide3" >
                        <div className="content">
                            <h3>the best courses you will find find here!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                            <NavLink to="/" className="btn">get started</NavLink>
                        </div>
                    </section>
                </SwiperSlide>

            </Swiper>

                </div>

                <div className="swiper-pagination"></div>

            </div>

        </section>
    )
}
export default Firstsection