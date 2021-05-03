var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _AddressID:mongoose.Schema.Types.ObjectId,
    countryID: {
        type: Number,
        required: true
    },
    stateID: {
        type: Number,
        required: true
    },
    cityID: {
        type: Number,
        required: true
    },
    AddressName: {
        type: String,
        required: true
    },
    AddressRemark: {
        type: Number,
        allowNull: true
    },
    AddressStatus: {
        type: String, 
        enum : ['Active', 'Inactive'], 
        default: 'Active',
        allowNull: false
    },
    AddressCreatedDate: { 
        type : Date, 
        default: Date.now 
    }
})

const Address = mongoose.model('address', UserSchema)

module.exports = Address;