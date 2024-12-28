const User = require('../models/user.model.js')

async function getAllUsers(req, res) {
    const allUsers = await User.find({})
    return res.status(200).json(allUsers)
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    return res.status(200).json(user)
}

async function createNewUser(req, res) {
    const { first_name, last_name, email, gender, job_title } = req.body
    if (!first_name || !last_name || !email || !gender || !job_title) {
        return res.status(400).json({ message: "All Fields are Requied" })
    }
    const result = await User.create({
        firstName: first_name,
        lastName: last_name,
        email: email,
        gender: gender,
        jobTitle: job_title
    })
    return res.status(201).json({ message: "user created successfully", id: result._id })
}

async function updateUserById(req, res) {
    return res.json({ message: "Features not added yet!" })
}

async function deleteUserById(req, res) {
    return res.json({ message: "Features not added yet!" })
}



module.exports = { getAllUsers, getUserById, createNewUser, updateUserById, deleteUserById }