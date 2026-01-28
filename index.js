const express =require ('express');
const app = express();
 app.get("/",(req,res)=>{
    res.send("welcome to cse ");
 });
app.listen(3000, () => {
    console.log("Server running successfully");
});
