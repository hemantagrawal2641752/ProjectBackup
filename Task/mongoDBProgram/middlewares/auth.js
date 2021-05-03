const jwt = require('jsonwebtoken');
const { promisify } = require('util');
var models = require('../model');
var Users = models.Users;
exports.protect = async (req, res, next) => {
    try {
        
        const { authorization } = req.headers;
        if (!authorization) {
            res.json({
                status: "false",
                message: 'Please enter authorization.',
            })
        }
        jwt.verify(authorization, process.env.SECRET, function (err, decoded) {
            if (err) {
                res.json({
                    status: "false",
                    message: 'The user belonging to this token does no longer exists.',
                })
            } else if (decoded) {
              // store userInfo in request (userInfo)
              const currentUser = Users.findOne({ "_id": decoded._id });
              if (!currentUser) {
                  res.json({
                      status: "false",
                      message: 'The user belonging to this token does no longer exists.',
                  })
              }
              req.user = decoded._id;
              next();
            } else {
              // send Unauthorized response
              res.status(401).json({
                status: false,
                message: 'Unauthorized user',
                data: {}
              })
            }
          })

    } catch (error) {
        console.log(error)
    }
};
