const express= require("express");
const bodyParser= require("body-parser")
const app= express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    console.log(__dirname)
});

app.post("/",function(req,res){
    var weight=Number(req.body.wei);
    var height= Number(req.body.hei);
    var bmi= weight/(height*height);
    res.send("The bmi is "+bmi.toFixed(2))
});

app.listen(3000, function(){
    console.log("Server is running at port 3000")
})