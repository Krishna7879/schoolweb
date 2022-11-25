const mongoose=require('mongoose')
const DB=process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log('connection successfully established')
}).catch((err)=>{
    console.log(err)
})