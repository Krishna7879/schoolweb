import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('/logout',{
            method:"GET"
        }).then(res=>{
            navigate('/login')
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    return (
        <h1>logout</h1>
    )
}
export default Logout