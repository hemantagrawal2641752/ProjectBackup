var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    Email: {
        type: String,
    },
    Password: {
        type: String,
    },
    Mobile: {
        type: String,
    },
    Address: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    UsersCreatedDate: { 
        type : Date, 
        default: Date.now 
    }
})

const Users = mongoose.model('tbl_users', UserSchema)

module.exports = Users;