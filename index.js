import express from "express"

const app=express();
const port=3000;


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/Browse",(req,res)=>{
    res.render("browse.ejs");
});
app.listen(port,()=>{
    console.log("server running on port 3000")
});