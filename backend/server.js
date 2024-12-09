require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:4000" }));
mongoose.connect('')

//register
app.post('/register' , (req,res)=> {
  console.log(req.body)
  res.json({status : 'ok'})
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
