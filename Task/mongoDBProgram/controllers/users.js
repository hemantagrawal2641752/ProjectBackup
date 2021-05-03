var Users = require('../services').Users;
let ED = require('../DB/encry_decry')

exports.add = (req, res, next) => {
    var query = {};
    query.firstName = req.body.firstName;
    query.lastName = req.body.lastName;
    query.Email = req.body.Email;
    query.Password = ED.encrypt(req.body.Password);
    query.Mobile = req.body.Mobile;
    query.Address = req.body.Address;
    var result = Users.validateAPI(query);
    if (result == "") {
        Users.findUsers(query, (ret) => {
            if (ret.length > 0) {
                res.send({
                    status: "false",
                    message: 'Users already exists.',
                })
            }
            else {
                Users.addUsers(query, (ret) => {
                    if (ret) {
                        res.json({
                            status: "true",
                            message: 'Users added successfully.',
                            data: ret[0],
                        })
                    } else {
                        res.json({
                            status: "false",
                            message: '',
                            data: ret.errors,
                        })
                    }
                });
            }
        });
    }
    else {
        res.json({
            status: "false",
            message: result
        });
    }
};

exports.login = (req, res, next) => {
    var query = {};
    query.Email = req.body.Email;
    query.Password = ED.encrypt(req.body.Password);
    Users.findUsersInLogin(query, (ret) => {
        if (ret.length > 0) {
            Users.updateToken(ret, (user) => {
                res.send({
                    status: "false",
                    message: 'Login successfully.',
                    data: user,
                })
            })
        }
        else {
            res.json({
                status: "false",
                message: 'Users not found.',
            })
        }
    });
};

exports.list = (req, res, next) => {
    let pageNo = parseInt(req.query.pageNo)
    let limit = parseInt(req.query.size)
    let startindex = (pageNo - 1) * limit;
    let endindex = pageNo * limit;
    if (pageNo < 0 || pageNo === 0) {
        res.json({
            status: "false",
            message: 'invalid page number, should start with 1',
            data: {},
        })
    }
    let findAssignment;
    Users.getUsersList((ret) => {
        if (ret) {
            findAssignment = ret.slice(startindex, endindex)
            res.json({
                status: "true",
                message: "Get all users",
                TotalUsers: findAssignment.length,
                data: findAssignment
            })
        }
        else {
            res.json({
                status: "false",
                message: 'Users data not found!',
                data: ret.errors,
            })
        }
    });
};

exports.update = (req, res, next) => {
    var query = {};
    query.id = req.body.id;
    query.firstName = req.body.firstName;
    query.lastName = req.body.lastName;
    query.Mobile = req.body.Mobile;
    query.Address = req.body.Address;
    var result = Users.updateValidateAPI(query);
    if (result == "") {
        Users.findandEdit(query, (ret) => {
            if (ret.length > 0) {
                res.send({
                    status: "false",
                    message: 'Users already exists.',
                })
            }
            else {
                Users.findByIdAndUpdate(query, (ret) => {
                    if (ret) {
                        Users.updateFindById(query, (ret) => {
                            res.send({
                                status: "true",
                                message: 'Users updated successfully.',
                                data: ret[0]
                            })
                        })
                    } else {
                        res.json({
                            status: "false",
                            message: '',
                            data: ret.errors,
                        })
                    }
                });
            }
        });
    }
    else {
        res.json({
            status: "false",
            message: result
        });
    }
};

exports.search = (req, res, next) => {
    var query = {};
    query.searchUser = req.body.searchUser;
    Users.findUsersInsearch(query, (ret) => {
        console.log(ret)
        if (ret.length > 0) {
                res.send({
                    status: "true",
                    message: 'User find successfully.',
                    data: ret,
                })
        }
        else {
            res.json({
                status: "false",
                message: 'Users not found.',
            })
        }
    });
};