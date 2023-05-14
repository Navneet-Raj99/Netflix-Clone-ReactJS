const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const user = require("../Models/User");
const JWT = require("jsonwebtoken");

//REGISTER
router.post('/register',
[
    body("username","Enter A Valid Username").isLength({min:5}),
    body("email", "Enter a valid email").isEmail({ min: 3 }),
    body("password", "Password Must be atleast of 5 characters").isLength({
      min: 5,
    }),
],
async(req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let newusercheck = await user.findOne({ email: req.body.email });
    let newuser_username= await user.findOne({ username: req.body.username });
    if (newusercheck) {
        return res.json({ error: "Already existing User" });
    }
    if (newuser_username) {
        return res.json({ error: "This Username Is Registered Try New User Name" });
    }

    // Password Hashing TO be Added Later On //
    else{
        newusercheck = await user.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,

          });
          const fc = JWT.sign(newusercheck.id, "mynameisnavneetraj");
        //    newusercheck.AUTH_TOKEN=fc;
         return res.json({ AUTH_TOKEN: fc, Name:newusercheck});
    
    }
}
)

// LOGIN

router.post('/login',
[
    body("email", "Enter a valid email").isEmail({ min: 3 }),
],
async(req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let emailtocheck = req.body.email;
    let passwordtocheck = req.body.password;
    let check = await user.findOne({ email: emailtocheck });
    if(!check)
    {
        return res.json({"Message":"Login With Valid Credentials"})
    }
    else 
    {
        if(check.password==passwordtocheck)
        {
            const fc = JWT.sign(check.id, "mynameisnavneetraj");
        return res.json({"Message":"Login Successfully",
        "User":check,
             "AUTH_TOKEN":fc
    })
}
else
{
    return res.json({"Message":"Invalid Password"})
}
    }
})
module.exports = router;