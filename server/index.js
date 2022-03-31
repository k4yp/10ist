const express = require("express")
const multer = require("multer")
const app = express();
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const catagoriesRoute = require("./routes/catagories")

dotenv.config()
app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });

app.post("/server/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded");
});

app.use("/server/auth", authRoute)
app.use("/server/users", usersRoute)
app.use("/server/posts", postsRoute)
app.use("/server/catagories", catagoriesRoute)

const PORT = process.env.PORT || 5000

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} on port ${PORT}`)
  })