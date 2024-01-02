const jwt = require("jsonwebtoken")
const key = "secretKey"
const fetchdetails = async(req,res,next)=>{
    const token =  await req.header("token")
    if (!token){
        console.log(" connot find token")
    }
    try {
        const varify = jwt.verify(token,key)
        req.user = varify
        next();

    } catch (error) {
        console.log(error)
        res.send("token not vaild")
    }
}
module.exports =  fetchdetails