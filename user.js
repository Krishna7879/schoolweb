const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
studentSchema.pre("save",async function(next){
    if(this.isModified('password')){
        const hash= await bcrypt.hash(this.password,10)
        this.password=hash
    }
    next()
})

studentSchema.methods.getToken=async function(){
    const token=jwt.sign({_id:this._id},process.env.SECRET)
    this.tokens=this.tokens.concat({token:token})
    await this.save()
    return token
}

const StudentData=mongoose.model('StudentData',studentSchema)


module.exports=StudentData