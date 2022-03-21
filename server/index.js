const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get('/', (request,responce) =>{
    responce.send('<h1>server running</h1>')
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })