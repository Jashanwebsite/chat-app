const express = require("express")
// const mongouser = require("../schemas/User")
const bcrypt = require("bcryptjs")
const router = express.Router()
const jwt = require("jsonwebtoken")
const user = require("../schemas/User")
const str = "jashanisagoodboy"
const secretKey="secretKey"
const salt = 10
// {create user route-----------------------------------------------------------------------------}
router.post("/createuser", (req, res) => {
  var secpass;
  const { name, email, password } = req.body
  if (!name || !email || !password) { return res.sendStatus(404) }
  bcrypt.hash(password, salt, async function (err, hash) {
    if (err) { return console.error(err); }
    secpass = hash
    const existuser = await user.findOne({ "email": email })
    if (existuser) { return res.json("user already exist") }
    const newuser = await user.create({
      name: name,
      password: secpass,
      email: email
    })
    res.json({ newuser })
  });
})

router.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email) {
      return res.sendStatus(400);
    }
    const userexist = await user.findOne({ "email": email })
    // console.log(userexist.password)
    if (!userexist) { return res.sendStatus(404).statusMessage("sorry user doesnot exist") }
    bcrypt.compare(password, userexist.password,async(err,result)=>{
      if(err){ return ()=>{ console.log(error), res.sendStatus(500)}}
      const id =  String(userexist._id)
      const token = jwt.sign(id, "secretKey");
      res.json({token, "user":userexist.name})

    })
  }
  catch (err) { console.log(err) }

});
router.post("/getuser",async(req,res)=>{
     const {authtoken} = req.headers
     if(!authtoken) { return res.sendStatus(400)}
    //  res.send(authtoken)
     jwt.verify(authtoken,secretKey,async(err,result)=>{
      if(err){console.log(err)}
      // res.send(result)
      const getuser = await user.findById(result)
      res.send(getuser)

     })
})
module.exports = router 