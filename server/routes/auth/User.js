const express = require("express")
const router = express.Router()
const webtoken = require("jsonwebtoken")
const str = "jashanisagoodboy"
webtoken.sign
// {create user route-----------------------------------------------------------------------------}
router.post("/createuser",(req,res)=>{
    const name = req.body.name
    if(!name){return res.sendStatus(404)}
    const secname = webtoken.sign(str,name)
    if(secname){res.json(secname)}
})

router.post("/login", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.sendStatus(400);
  }
  const token = req.headers.authorization;
  if (token) {
    res.json(token);
  }
});
module.exports = router 