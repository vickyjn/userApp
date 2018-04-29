var mongoose=require('mongoose');

var Users=mongoose.model('Users',{
name:{
  type:String,
  required:true,
  minlen:10,
  trim:true
},
empid:{
  type:Number
},
joinedOn:{
  type:Number
}

});

module.exports={
  Users:Users
}
