const express = require("express")
const app = express();
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")

dotenv.config()
app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.use("/server/auth", authRoute)
app.use("/server/users", usersRoute)
app.use("/server/posts", postsRoute)

const PORT = process.env.PORT || 5000

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} on port ${PORT}`)
  })