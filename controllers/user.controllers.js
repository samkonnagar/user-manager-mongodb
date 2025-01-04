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
    const { first_name, last_name, email, gender, job_title } = req.body
    if (!first_name || !last_name || !email || !gender || !job_title) {
        return res.status(400).json({ message: "All Fields are Requied" })
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            firstName: first_name,
            lastName: last_name,
            email: email,
            gender: gender,
            jobTitle: job_title
        })
        if (user) {
            return res.json({message: "user updated successfully"})
        } 
        return res.json({message: "user not exist"})
    } catch (error) {
        return res.json({message: "Invalid Id"})
    }
}

async function deleteUserById(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (user) {
            return res.json({message: "user deleted successfully"})
        } 
        return res.json({message: "user not exist"})
    } catch (error) {
        return res.json({message: "Invalid Id"})
    }
}



module.exports = { getAllUsers, getUserById, createNewUser, updateUserById, deleteUserById }