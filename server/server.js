var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose');
var {Users}=require('./models/usermodel.js');



//express

var app=express();



app.use(bodyParser.json());

app.post('/users',(req,res)=>{
var newUser=new Users({
  name:req.body.name
});

newUser.save().then((doc)=>{
  res.send(doc);
},(e)=>{
res.status(400).send(e);
});


})




app.listen(3000,()=>{
  console.log('server started at 3000 successfully');
});
//
// var newUsers=new Users({
//   name:'Siva',
//   empid:30472783,
//     joinedOn:7/7/2013
// });
//
// newUsers.save().then((doc)=>{
//   console.log("User created",doc);
// },(e)=>{
//   console.log('error in creation');
// })
module.exports={
  app:app
}
