import pic1 from "./Aboutimg/pic-1.png"
import pic2 from "./Aboutimg/pic-2.png"
import pic3 from "./Aboutimg/pic-3.png"
import pic4 from "./Aboutimg/pic-4.png"
import pic5 from "./Aboutimg/pic-5.png"
import pic6 from "./Aboutimg/pic-6.png"

const Review = () => {
    return (
        <section className="reviews">

            <h1 className="heading"> our students review </h1>

            <div className="swiper reviews-slider">

                <div className="swiper-wrapper">

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic1} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic2} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic3} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic4} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic5} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                    <div className="swiper-slide slide">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                        <img src={pic6} alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
export default Review