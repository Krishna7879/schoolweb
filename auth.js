const jwt = require('jsonwebtoken')
const StudentData = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        const verifytoken = jwt.verify(token, process.env.SECRET)
        const rootuser = await StudentData.findOne({ _id: verifytoken._id, "tokens:token": token })

        if (!rootuser) {
            throw new Error('user not found')
        }
        req.token = token;
        req.rootuser = rootuser;
        req.StudentId = rootuser._id;
        next()

    }
    catch(err){
        res.status(401).send({error:"unauthorized user"})
       
    }



}

module.exports = auth