import AboutHeadlinglink from "./Aboutcomponent/AboutHeadinglink"
import MainAbout from "./Aboutcomponent/MainAbout"

import Header from "./subcomponent/Header"
import Footer from "./subcomponent/Footer"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const About=()=>{
    const navigate=useNavigate()
    
    const callAboutpage= useCallback(async()=>{
        try{
            const res=await fetch("/about",{
                method:"GET"
            })
            const data=await res.json()
            console.log(data)
            if(res.status===401){
                navigate('/login')
            }
        }
        catch(err){
            console.log(err)
        } 
    },[navigate])
    
    useEffect(()=>{
        callAboutpage()
    },[callAboutpage])

    return (
        <>
        <Header/>
        <AboutHeadlinglink/>
        <MainAbout/>
        <Footer/>
        </>
    )
}
export default About