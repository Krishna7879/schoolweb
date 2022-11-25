import React, { useState } from 'react'
import contactimg from './contact-img.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../subcomponent/Header'
import Footer from '../subcomponent/Footer'
const Signup = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:""
    })
    let name,value
    const HandleInput=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value})
    }
    const sendData=async(e)=>{
        e.preventDefault()
        const {name,email,phone,password,confirmpassword}=user
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,confirmpassword
            })
        })
        const data=await res.json()
        console.log(data)
        console.log(res)
        if(res.status===409 || !data){
            window.alert(data.message)
            console.log('invalid details')
        }
        else{
            window.alert('registered successfuly')
            console.log('resgiesterd')
            navigate('/Login')
        }

    }
    
    const btnstyle={
        border:'2px solid #0eb582',
        width:'100px',
        height:"50px",
        cursor:"pointer"
    }


    return (
        <>
            <Header />
            <section className="heading-link">
                <h3>Signup</h3>
                <p> <NavLink to="/">Home</NavLink> / Signup </p>
            </section>
            <section className='contact'>
                <div className="row">
                    <div className="image">
                        <img src={contactimg} alt="" />
                    </div>
                    <form method='POST' onSubmit={sendData}>
                        <h3>Create Account</h3>
                        <input type="text" name="name" value={user.name} onChange={HandleInput} placeholder="name" className="box"  required/>
                        <input type="email" name="email"  value={user.email} onChange={HandleInput} placeholder="email" className="box" required />
                        <input type="number" name="phone" value={user.phone} onChange={HandleInput} placeholder="phone" className="box"  required/>
                        <input type="text" name="password"value={user.password} onChange={HandleInput}  placeholder="password" className="box"  required/>
                        <input type="text" name="confirmpassword" value={user.confirmpassword} onChange={HandleInput} placeholder="confirm password" className="box" required />
                      
                        <button type="submit" style={btnstyle}>Submit</button>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Signup