const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Users}=require('./../models/usermodel');


beforeEach((done)=>{
  Users.remove({}).then(()=>{
    done()
  })
});



describe('POST /users',()=>{

it('should create a new user',(done)=>{
 var name="Siddartha";

 request(app)
       .post('/users')
       .send({name})
       .expect(200)
       .expect((res)=>{
        expect(res.body.name).toBe(name)
       })
       .end((err,res)=>{
         if(err){
           return done(err);
         }
          Users.find().then((users)=>{
            expect(users.length).toBe(1);
            expect(users[0].name).toBe(name);
            done();
          }).catch((e)=>done(e));

       });

});



});
