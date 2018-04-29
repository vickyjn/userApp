const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Profiles',(err,client)=>{
if(err){
  return console.log('unable to connect');

}

console.log('conencted to mongodb server');

const db=client.db('Profiles')
db.collection('Users').insertOne({
name:'Vignesh Jagan',
ntid:'vjg5kor',
empid:30478723,
level:52
},(err,result)=>{
if(err){
  return console.log('unable to insert into the data',err);
}

console.log(JSON.stringify(result.ops,undefined,2));
});



client.close();

});
