const mongoose=require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
 username:{
     type:String,
     required:true,
    
 },
 email:{
     type:String,
     required:true,
     unique:true
    
 },
 password:{
    type:String,
    required:true
},
profilepicture:
{
    type:String,
    default:""
},
isAdmin:
{
    type:Boolean,
    default:false
},
date:{
    type:Date,
    default:Date.now
}
});
const User=mongoose.model('User',UserSchema)
User.createIndexes();
module.exports=User;