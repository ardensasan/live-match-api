import express from "express";
const app = express();
const port = process.env.PORT || 3001;
app.get('/',(req,res)=>{
    res.send("Okay")
})
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/`);
});
