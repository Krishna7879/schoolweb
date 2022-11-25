import contactimg from './Contactimg/contact-img.png'

const MainContact = () => {
    return (
        <section className="contact">
            <div className="row">
                <div className="image">
                    <img src={contactimg} alt="" />
                </div>
                <form>
                    <h3>send us a message</h3>
                    <input type="text" placeholder="name" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <input type="number" placeholder="phone" className="box" />
                    <textarea name="" className="box" placeholder="message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>

            </div>
        </section>

    )
}
export default MainContact