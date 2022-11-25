import React, { useState } from 'react'
import contactimg from './contact-img.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../subcomponent/Header'
import Footer from '../subcomponent/Footer'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Loginuser = async (e) => {
        e.preventDefault()
        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        })
        const data = await res.json()
        console.log(data)
        console.log(res)
        if (res.status===404 || !data) {
            window.alert(data.error)
            console.log('invalid details')
        }
        else {
            window.alert(data.message)
            console.log('loged in')
            navigate('/')
        }

    }

    const btnstyle={
        border:'2px solid #0eb582',
        width:'100px',
        height:"50px"
    }

    return (
        <>
            <Header />

            <section className="heading-link">
                <h3>Login</h3>
                <p> <NavLink to="/">Home</NavLink> / Login </p>
            </section>
            <section className='contact'>
                <div className="row">
                    <div className="image">
                        <img src={contactimg} alt="" />
                    </div>
                    <form method='POST' onSubmit={Loginuser}>
                        <h3>please enter your details</h3>

                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="box" required />
                        <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="box" required />
                        {/* <input type="submit" onClick={Loginuser} value="submit" className="btn" /> */}
                        <button type="submit" style={btnstyle}>Submit</button>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Login