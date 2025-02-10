import express from 'express';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/" , (req , res ) => {
    res.render("index.ejs");
});

app.get("/home" , (req , res ) => {
    res.render("index.ejs");
});

app.get("/projects" , (req , res ) =>{
    res.render("album#projects.ejs");
})

app.listen(port, ()=>{
    console.log(`listening on port : ${port}`);
});