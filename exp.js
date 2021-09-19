const express=require("express");
const path=require('path');
const app=express();
app.listen(3007,function(){
    console.log("server has started");
   // console.log(__filename);   
   // console.log(__filename);     //filename with full path
  //  console.log(__dirname);      // directory of full path
})
//middleware functions execute during lifecycle of a request to the express server  EG:USE
app.use(function(req,res,next){
    console.log("first");
    console.log("soon after a request -----------------------------------------------------");
next();  //if i donot call this cb next function here it will stops after this. it wont go to the get method.
});
app.get('/',function(req,res,next){        // one / means root host
 //  res.sendFile(path.join(__dirname,'index.html'));       //file absolute or full path should be given here
 console.log("second");

    res.send("heiiiiiiiiiiiiiii"); //http://localhost:3000
  //  next();
})


app.use(function(req,res,next){
    console.log("third");
    next();
});



app.get('/signup',(req,res)=>
 {    console.log("forth");

     res.sendFile(path.join(__dirname,'index.html'));
}); //goes to about page http://localhost:3000/aboutt
//sending a whole html file here





//if data is submitted we are giving post method then
app.post('/signup',function(req,res){
    console.log("fifth");
    res.send('account  created')
})

//localhost/signup   here after calling url get method will be accessed first and so frst html file will be loaded and do the form, 
// when the form is submitted post method executed