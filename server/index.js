const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get('/', (req,res) =>{
    res.statusCode = 200;
    res.send('server running')
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })