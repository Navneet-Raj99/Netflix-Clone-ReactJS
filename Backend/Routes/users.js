const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const user = require("../Models/User");
const JWT = require("jsonwebtoken");

//UPDATE
router.put("/updateuser/:id", async (req, res) => {
  const auth_token = req.header("auth_token");
  if(!auth_token)
{
    return res.json({"Message":"You are not Authenticated"});
}
  let data = JWT.verify(auth_token, "mynameisnavneetraj");
  if (data != req.params.id) {
    return res.json({
      Message: "Unauthorized User Tried To change the Information",
    });
  } else {
    get_user = await user.findById(req.params.id);
    if (req.body.username) {
      get_user.username = req.body.username;
    }
    if (req.body.password) {
      get_user.password = req.body.password;
    }
    await get_user.save();
  }
  return res.status(200).send({ Progress: "User Updated", User: get_user });
});
//DELETE
router.delete("/deleteuser/:id", async (req, res) => {
    const auth_token = req.header("auth_token");
    if(!auth_token)
    {
        return res.json({"Message":"You are not Authenticated"});
    }
    let data = JWT.verify(auth_token, "mynameisnavneetraj");
    if (data != req.params.id) {
      return res.json({
        Message: "Unauthorized User Tried To Delete the given user",
      });
    } else {
      get_user = await user.findByIdAndDelete(req.params.id);
    }
    return res.status(200).send({ Progress: "User Deleted", User: get_user });
  });
//GET

//GET ALL
router.get('/getalluser',async(req,res)=>
{
    const type=req.query.type;
    let specifiedUser;
    if(type==="new")
    {
      specifiedUser=await user.aggregate([
        {$match:{isAdmin:true}},
        {$sample:{size:1}},
    ])
    }
    else
    {
      specifiedUser=await user.find().sort({_id:-1});
    }
    // const user= query?await user.find().limit(1) : await user.find();
    //Sorting Data On latest Basis
    // let getalluser=await user.find().sort({_id:-1});
    return res.json(specifiedUser);
})
//GET USER STATS
router.get('/stats',async(req,res)=>
{
    const today=new Date();
    const lastyear=today.setFullYear(today.setFullYear-1);
    const month=["January","February","March","April","June","July","August","September","October","November","December"];
    try{
        const data=await user.aggregate([
            {
                $project:{
                    month:{$year:"$createdAt"},
                },
            },{
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                },
            },
        ])
        return res.json(data)
    }
    
    catch(err)
    {
        return res.json(err);
    }
})

module.exports = router;
