const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const express=require('express')
require('./db/connection')
const path=require('path')
const cookieParser=require('cookie-parser')
const app=express()
app.use(express.json())
app.use(cookieParser())
const port=process.env.PORT|| 8000

app.use(require('./router/action'))
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log('greeting server is running')
})