const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

app.use(express.json());
app.use(cors());

const mongourl = "mongodb+srv://blurr_99:capybara70797877@cluster0.xtmjxv4.mongodb.net/capybara"


mongoose.connect(mongourl,{
  useNewUrlParser: true
}).then(()=>{console.log("Connected to database");})
.catch(e=>console.log(e));


app.listen(5000,()=>{
  console.log("Server started");
});

require("./models/Item");

const job = mongoose.model("resolution");

app.get("https://server-tzfy.onrender.com/getAllJob", async(req,res)=>{
  try{
      const alljob = await job.find({});
      res.send({data: alljob});
  }
  catch(error){
      console.log(error);
  }
})

require("./models/Resolution");
const home = mongoose.model("home");

app.get("https://server-tzfy.onrender.com/getHome", async(req,res)=>{
  try{
    const allhome = await home.find({});
    res.send({data: allhome});
  }
  catch(error){
    console.log(error);
  }
})

