//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Profiles',(err,client)=>{
if(err){
  return console.log('unable to connect');

}

console.log('conencted to mongodb server');

const db=client.db('Profiles')

//deleteMany

// db.collection('Users').deleteMany({name:'Vignesh Jagan'}).then((result)=>{
// console.log(result);
// });

//deleteOne
db.collection('Users').deleteMany({name:'Vignesha Jagan'}).then((result)=>{
console.log(result);
});
//findOneandDelete


//client.close();

});
