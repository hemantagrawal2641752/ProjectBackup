const jwt = require('jsonwebtoken');
const Users = require('../models/users/users');
const AppError = require('../utils/appError');

exports.protect = async (req, res, next) => {
    try {
        // 1) Getting token check of it's there
        const { authorization } = req.headers;
        
        if (!authorization) {
            return next(new AppError('Please provide authorization headers', 401));
        }
        jwt.verify(authorization, process.env.JWT_KEY, async function (err, decoded) {
            if (err) {
                return next(new AppError('Authentication token invalid', 400));
            }
            const currentUser = await Users.findOne({ where: { userId: decoded.user } });
            if (!currentUser) {
                return next(new AppError('The user belonging to this token does no longer exists', 401));
            }
            req.user = decoded.user;
            next();
        });
    } catch (error) {
        // return next(error);
        return next(error);
    }
};

