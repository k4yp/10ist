import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router()
const User = require('../models/User')

//register a new user
router.post('/register', async (req: any, res: any) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

//login to an existing user
router.post('/login', async (req: any, res: any) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return res.status(400).json('wrong credentials')
        }
        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) {
            return res.status(400).json('wrong credentials')
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
