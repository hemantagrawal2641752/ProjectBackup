
const Users = require('../../models/users/users');
const AppError = require('../../utils/appError');
var md5 = require('md5');
const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = require('../../database/database');

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

exports.userLogin = async (req, res, next) => {
    try {

        var { userEmail, userPassword } = req.body;
        if (!userEmail || !userPassword) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        let usersDetails;

        req.body.userPassword = md5(req.body.userPassword);

        if (userEmail.match(/@/g)) {
            usersDetails = await Users.findOne({ where: [{ userEmail: userEmail }, { userPassword: req.body.userPassword }] });
        }

        if (!usersDetails || usersDetails === null || usersDetails === undefined) {
            return next(new AppError('No details found.', 400));
        }

        if (!usersDetails) {
            return next(new AppError('Invalid details.', 400));
        }

        const token = jwt.sign({ user: usersDetails.userID }, process.env.JWT_KEY, {
            expiresIn: '5h',
        });

        res.status(200).json({
            status: true,
            message: 'Login successfully.',
            data: {
                usersDetails,
                token
            },
        });
    }
    catch (error) {
        return next(error);
    }
};


exports.getAllusersAdmin = async (req, res, next) => {
    try {

        const isExitAdmin = await Users.findOne({ where: [{ userID: req.user }, { 'userRoleID': 'Admin' }] });

        if (!isExitAdmin || isExitAdmin === null || isExitAdmin === undefined) {
            return next(new AppError('Only admin get users details.', 400));
        }

        const statment = "SELECT * FROM `tbl_users` WHERE userRoleID != 'Admin'";

        const usersList = await sequelize.query(statment, { type: QueryTypes.SELECT });

        res.status(200).json({
            status: true,
            message: 'Get all users.',
            data: {
                usersList
            },
        });
    }
    catch (error) {
        return next(error);
    }
};






