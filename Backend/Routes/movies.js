const express = require("express");
const router = express.Router();
const movie = require("../Models/Movie");
const user = require("../Models/User");
const JWT = require("jsonwebtoken");
// const Movie = require("../Models/Movie");
//CREATE
router.post('/create',async(req,res)=>
{
    const auth_token = req.header("auth_token");
  if(!auth_token)
{
    return res.json({"Message":"You are not Authenticated"});
}
let data = JWT.verify(auth_token, "mynameisnavneetraj");
let tocheckuser=await user.findById(data);
if(tocheckuser.isAdmin==false) 
{
   return res.json({"Message":"You Cant Add movie to the list"})
}
else
{
    let pastmovie=await movie.findOne({title:req.body.title})
    if(pastmovie)
    {
        return res.json({"Message":"movie Is already there"})
    }
    else
    {
    newmovie = await movie.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        trailer:req.body.trailer,
        video:req.body.video,
        year:req.body.year,
        limit:req.body.limit,
        genre:req.body.genre,
        isSeries:req.body.isSeries
      });
      return res.json({"Message":"New Movie Added Successfully","Movie":newmovie})
}
}

})

//UPDATE
router.put("/updatemovie/:id", async (req, res) => {
  const auth_token = req.header("auth_token");
  if(!auth_token)
{
    return res.json({"Message":"You are not Authenticated"});
}

  let data = JWT.verify(auth_token, "mynameisnavneetraj");
  let tocheckuser=await user.findById(data);
if(tocheckuser.isAdmin==false) 
{
   return res.json({"Message":"You Cant Add movie to the list"})
}
else{
  get_movie = await movie.findById(req.params.id);

   
    if (req.body.title) {
      get_movie.title = req.body.title;
    }
    if (req.body.description) {
      get_movie.description = req.body.description;
    }
    if (req.body.genre) {
        get_movie.genre = req.body.genre;
      }
      if (req.body.year) {
        get_movie.year = req.body.year;
      }
    await get_movie.save();
  }

  return res.status(200).send({ Progress: "Movie Updated", Movie: get_movie });

});
//DELETE
router.delete("/deletemovie/:id", async (req, res) => {
    const auth_token = req.header("auth_token");
    if(!auth_token)
  {
      return res.json({"Message":"You are not Authenticated"});
  }
    let data = JWT.verify(auth_token, "mynameisnavneetraj");
    let tocheckuser=await user.findById(data);
  if(tocheckuser.isAdmin==false)
  {
    return res.json({"Message":"You Cant Add movie to the list"})
  }
  else{
    get_movie = await movie.findByIdAndDelete(req.params.id);
    return res.status(200).send({ Progress: "Movie Deleted", Movie: get_movie });
}
  });
//GET RANDOM MOVIE
router.get('/random',async(req,res)=>
{
    let Movie;
    const type=req.query.type;
    if(type==="series")
    {
         Movie=await movie.aggregate([
            {$match:{isSeries:true}},
            {$sample:{size:1}},
        ])
    }
    else if(type==="movies")
    {
         Movie=await movie.aggregate([
            {$match:{isSeries:false}},
            {$sample:{size:1}}
        ])
    }
    return res.json({"Movie":Movie});
})

//GET
router.get('/getmovie/:id',async(req,res)=>
{
    get_movie=await movie.findById(req.params.id);
    if(!get_movie)
    {
        return res.json({"Message":"No such Movie Found"});
    }
    else{
    return res.json({"Movie":get_movie});
    }
    
})

module.exports = router;
