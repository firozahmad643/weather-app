const express = require("express");
const app = express();
const hbs = require("hbs")

const viewspath = "E:/nodejs/express---app---/weatherapp1/templete/views"
app.set("view engine","hbs");
app.set("views",viewspath);

app.use(express.static("E:/nodejs/express---app---/weatherapp1/public"));
hbs.registerPartials("E:/nodejs/express---app---/weatherapp1/templete/partials")

app.get("/",(req,res)=>{
   res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
 })
 app.get("/weather",(req,res)=>{
    res.render("weather")
 })

 app.get("*",(req,res)=>{
    res.render("error404",{
      errorcomment:"oppes some error"
    })
 })

 app.listen(4500,()=>{
    console.log("listening on port 4500");
 })