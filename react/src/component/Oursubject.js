import Icon1 from './Homeimg/subject-icon-1.png'
import Icon2 from './Homeimg/subject-icon-2.png'
import Icon3 from './Homeimg/subject-icon-3.png'
import Icon4 from './Homeimg/subject-icon-4.png'
import Icon5 from './Homeimg/subject-icon-5.png'
import Icon6 from './Homeimg/subject-icon-6.png'
const Oursubject = () => {
    return (
        <section className="subjects">

            <h1 className="heading">our popular subjects</h1>

            <div className="box-container">

   
                <div className="box">
                    <img src={Icon1} alt="" />
                    <h3>graphic design</h3>
                    <p>12 modules</p>
                </div>

                <div className="box">
                    <img src={Icon2} alt="" />
                    <h3>mathemetics</h3>
                    <p>12 modules</p>
                </div>

                <div className="box">
                    <img src={Icon3} alt="" />
                    <h3>teaching</h3>
                    <p>12 modules</p>
                </div>

                <div className="box">
                    <img src={Icon4} alt="" />
                    <h3>development</h3>
                    <p>12 modules</p>
                </div>

                <div className="box">
                    <img src={Icon5} alt="" />
                    <h3>science</h3>
                    <p>12 modules</p>
                </div>
                <div className="box">
                    <img src={Icon6} alt="" />
                    <h3>engineering</h3>
                    <p>12 modules</p>
                </div>


            </div>

        </section>
    )
}

export default Oursubject