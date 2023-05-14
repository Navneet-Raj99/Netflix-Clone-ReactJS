const mongoose=require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
 title:{
     type:String,
     required:true,
     unique:true
    
 },
 type:{
     type:String,
    
 },
 genre:
 {
     type:String
 },
 content:
 {
     type:Array
 },
date:{
    type:Date,
    default:Date.now
}
});
const List=mongoose.model('List',ListSchema)
List.createIndexes();
module.exports=List;