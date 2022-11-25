
const express = require('express')
const StudentData = require('../models/user')
const bcrypt = require('bcrypt')
const router = express.Router()
// require("../db/connection")
const auth=require("../middlewares/auth")

router.get('/', (req, res) => {
    console.log('hello  i am router')
    res.send('hello i am from router side')
})

router.post('/register', async (req, res) => {
    const { name, email, phone, password, confirmpassword } = req.body
    if (!name || !email || !phone || !password || !confirmpassword) {
        return res.status(422).json({ message: 'please fill all details' })
    }
    try {
        const studentexist = await StudentData.findOne({ email: email })
        if (studentexist) {
            return res.status(409).json({ message: 'oops email is already exists' })
        }
        if (password === confirmpassword) {
            const newstudent = new StudentData({ name, email, phone, password, confirmpassword })
            const token = await newstudent.getToken()
            res.cookie('jwt', token, {
                expires: new Date(Date.now() + 50000),
                httpOnly: true
            })
            const result = await newstudent.save()
            if (result) {
                res.status(200).json({ message:"register successfully" })
            }
        }
        else {
            res.status(400).json({ message: "invalid credentials" })
        }

    }
    catch (err) {
        res.status(400).json({ error: err })
    }

})
router.post('/signin',async (req, res) => {
    const {email,password}=req.body
    if (!email || !password) {
        return res.json({ errror: 'fill all fields' })
    }
    try {
        const studentLogin = await StudentData.findOne({email:email})
        
        const token = await studentLogin.getToken()
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 50000),
            httpOnly: true
        })
        const isMatch = await bcrypt.compare(password, studentLogin.password)
        if (isMatch) {
            res.status(200).json({ message:"login successfully" })
        }
    }
    catch (err) {
        res.status(404).json({error:"user not found"})
    }
})
router.get('/about',auth,(req,res)=>{
    res.status(200).json('ok')
})
router.get('/courses',auth,(req,res)=>{
    res.status(200).json('ok')
})
router.get('/logout',(req,res)=>{
    res.clearCookie('jwt')
    res.status(200).json('ok')
})

module.exports = router