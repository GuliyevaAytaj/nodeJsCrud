const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },

        surname: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: false
        }

    },
    {
    timestamps: true    
    }


)
const User = mongoose.model('User', userSchema);
module.exports = User;