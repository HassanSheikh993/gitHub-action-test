import express from "express";
import path from "path"

const app = express();
const port = 8000;

app.use(express.static(path.join(process.cwd(), "public")));

// app.get("/test",(req,res)=>{
//     res.status(200).send("TESTING...")
// })


app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})