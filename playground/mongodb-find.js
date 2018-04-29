//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/Profiles',(err,client)=>{
if(err){
  return console.log('unable to connect');

}

console.log('conencted to mongodb server');

const db=client.db('Profiles')


//
// db.collection('Users').find({level:52}).toArray().then((docs)=>{
//   console.log('Users');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log('unable to fetch todos',err);
// })



db.collection('Users').find().count().then((count)=>{
  console.log(`No of users:${count}`);
},(err)=>{
console.log('unable to fetch todos',err);
})


client.close();

});
