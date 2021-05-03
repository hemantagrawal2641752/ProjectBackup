
var models = require('../model');
var Users = models.Users;
let jwt = require('jsonwebtoken');
var mongoose = require('mongoose')

exports.addUsers = (query, cb) => {
    var queryObj = {};
    queryObj.firstName = query.firstName;
    queryObj.lastName = query.lastName;
    queryObj.Email = query.Email;
    queryObj.Password = query.Password;
    queryObj.Mobile = query.Mobile;
    queryObj.Address = query.Address;
    Users.insertMany(queryObj).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findUsers = (query, cb) => {
    Users.find({
        $or: [{
            "Email": query.Email
        }, {
            "Mobile": query.Mobile
        }]
    }).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findandEdit = (query, cb) => {
    Users.find(
        {
            "$and": [{
                "Mobile": query.Mobile
            }, {
                "_id": { "$ne": mongoose.Types.ObjectId(query.id) }
            }]
        }
    ).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findUsersInLogin = (query, cb) => {
    Users.find({ "Email": query.Email, "Password": query.Password }).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.updateToken = (ret, cb) => {
    queryObj = {};
    let jwtData = {
        _id: ret[0]._id,
        Email: ret[0].Email
    }
    let accessToken = jwt.sign(jwtData, process.env.SECRET, {
        expiresIn: "2h"
    })
    queryObj.accessToken = accessToken;
    Users.findOneAndUpdate({ "_id": ret[0]._id }, queryObj, { new: true }).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.validateAPI = (query, ret) => {
    if ((query.firstName !== null) && (query.firstName !== '') && (query.lastName !== null) && (query.lastName) && (query.Email !== null) && (query.Email !== '') && (query.Password !== null) && (query.Password !== '') && (query.Mobile !== null) && (query.Mobile !== '') && (query.Address !== null) && (query.Address !== '')) {
        return "";
    } else {
        return "Parameter is missing";
    }
};

exports.updateValidateAPI = (query, ret) => {
    if ((query.id !== null) && (query.id !== '') && (query.firstName !== null) && (query.firstName !== '') && (query.lastName !== null) && (query.lastName) && (query.Mobile !== null) && (query.Mobile !== '') && (query.Address !== null) && (query.Address !== '')) {
        return "";
    } else {
        return "Parameter is missing";
    }
};

exports.getUsersList = (cb) => {
    Users.find().then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
};

exports.findByIdAndUpdate = (query, cb) => {
    var queryObj = {};
    queryObj.firstName = query.firstName;
    queryObj.lastName = query.lastName;
    queryObj.Mobile = query.Mobile;
    queryObj.Address = query.Address;
    Users.update({ "_id": query.id }, queryObj).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
};

exports.updateFindById = (query, cb) => {
    Users.find({ '_id': query.id }).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
};

exports.findUsersInsearch = (query, cb) => {
    Users.find({
        $or: [{
            "firstName": new RegExp(query.searchUser)
        }, {
            "lastName": new RegExp(query.searchUser)
        }, {
            "Email": new RegExp(query.searchUser)
        }, {
            "Mobile": new RegExp(query.searchUser)
        }]
    }).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
};