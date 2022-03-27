const express = require("express");
const app = express();

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.get('/', (req,res) =>{
    res.statusCode = 200;
    res.send('server running')
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} on port ${PORT}`)
  })