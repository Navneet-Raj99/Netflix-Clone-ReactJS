const mongoose=require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
 title:{
     type:String,
     required:true,
     unique:true
    
 },
 description:{
     type:String,
     required:true
    
 },
image:
{
    type:String
    
},
imageTitle:
{
    type:String
},
imageSmall:
{
    type:String
},
trailer:
{
    type:String
},
video:
{
    type:String
},
year:
{
    type:String,
    default:""
},
limit:
{
    type:Number
},
genre:
{
    type:String
},
isSeries:
{
    type:Boolean,
    default:false
},
date:{
    type:Date,
    default:Date.now
}
});
const Movie=mongoose.model('Movie',MovieSchema)
Movie.createIndexes();
module.exports=Movie;