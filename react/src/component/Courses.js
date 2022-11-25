import CoursesHeadlinglink from "./Coursescomponent/CoursesHeaderLink"
import Header from "./subcomponent/Header"
import Footer from "./subcomponent/Footer"
import MainCourses from "./Coursescomponent/MainCourses"
import { useNavigate } from "react-router-dom"
import { useCallback, useEffect } from "react"


const Courses = () => {

    const navigate = useNavigate()

    const callCoursePage = useCallback(async () => {
    
        try {
            const res = await fetch("/courses", {
                method: "GET"
            })
            const data = await res.json()
            console.log(data)
            if (res.status === 401) {
                navigate('/login')
               
            }
        }
        catch (err) {
            console.log(err)
        }
    }, [navigate])

    useEffect(() => {
        callCoursePage()
    })

    return (
        <>
            <Header />
            <CoursesHeadlinglink />
            <MainCourses />
            <Footer />
        </>


    )
}
export default Courses