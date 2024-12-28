const {Schema, model} = require('mongoose')

// Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    jobTitle: {
        type: String
    }
}, {timestamps: true})

const User = model('user', userSchema)

module.exports = User