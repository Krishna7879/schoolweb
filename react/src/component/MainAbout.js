import aboutimg from "./Aboutimg/about-img.jpg"
import abouticon1 from "./Aboutimg/about-icon-1.png"
import abouticon2 from "./Aboutimg/about-icon-2.png"
import abouticon3 from "./Aboutimg/about-icon-3.png"

const MainAbout = () => {
    return (
        <section className="about">

            <div className="image">
                <img src={aboutimg} alt=""/>
            </div>

            <div className="content">
                <h3 className="about-title">we have best courses for you</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste.</p>
                <div className="icons-container">
                    <div className="icons">
                        <img src={abouticon1} alt=""/>
                            <h3>350+</h3>
                            <span>courses</span>
                    </div>
                    <div className="icons">
                        <img src={abouticon2} alt=""/>
                            <h3>1200+</h3>
                            <span>students</span>
                    </div>
                    <div className="icons">
                        <img src={abouticon3} alt=""/>
                            <h3>10+</h3>
                            <span>awards</span>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default MainAbout