const express =require ('express');
const app = express();
 app.get("/homepage",(req,res)=>{
    res.send("welcome");
 });
app.listen(3000, () => {
    console.log("Server running successfully");
});