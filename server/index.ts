import express from 'express'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
const app = express()
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postsRoute  = require('./routes/posts')

app.use(express.static(__dirname));



dotenv.config()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))

const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log('Connected to MongoDB'))
    .catch((err: any) => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    },
})

const upload = multer({ storage: storage })

app.post('/server/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded')
})

app.use('/server/auth', authRoute)
app.use('/server/users', usersRoute)
app.use('/server/posts', postsRoute)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} on port ${PORT}`)
})
