const Users = require('../../models/driver');
const AppError = require('../../utils/appError');
var md5 = require('md5');


exports.registerUser = async (req, res, next) => {
    try {
        var { userName, userEmail, userMobile, userPassword } = req.body;
        if (!userName || !userEmail || !userMobile || !userPassword) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitEmail = await Users.findOne({ where: { userEmail: userEmail } });
        if (isExitEmail) {
            return next(new AppError('Email is already in use.', 400));
        }
        const isExitMobile = await Users.findOne({ where: { userMobile: userMobile } });
        if (isExitMobile) {
            return next(new AppError('Mobile number is already in use.', 400));
        }
        req.body.userPassword = md5(req.body.userPassword);
        const user = await Users.create(req.body);
        await user.save();
        res.status(200).json({
            status: true,
            message: 'Register successfully.',
            data: {
            },
        });
    } catch (error) {
        return next(error);
    }
};