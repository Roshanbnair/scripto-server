const express = require('express')
const User = require('../models/userModel')

const router = express.Router()



router.post('/createUsers', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

router.get("/getUsers", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error })
    }
})

router.route("/:id").get(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" })
    return res.json(user)
}).patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "Success" })
}).delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
})


module.exports = router
