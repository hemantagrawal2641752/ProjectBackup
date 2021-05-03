const StudentModel = require('../model/student');
const AppError = require('../../../utils/appError');
const sequelize = require('../../../DB/connection');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.createStudent = async (req, res, next) => {
    try {
        var { firstName, lastName, email, mobileNumber } = req.body;
        if (!firstName || !lastName || !email || !mobileNumber) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitEmail = await StudentModel.findOne({ where: { email } });
        if (isExitEmail) {
            return next(new AppError('Email is already in use.', 400));
        }
        const isExitMobile = await StudentModel.findOne({ where: { mobileNumber } });
        if (isExitMobile) {
            return next(new AppError('Mobile is already in use.', 400));
        }
        const student = new StudentModel(req.body);
        await student.save();

        res.status(200).json({
            status: true,
            message: 'Add student successfully.',
            data: {
                student
            }
        });
    } catch (error) {
        return next(error);
    }
};

exports.GetStudentsList = async (req, res, next) => {
    try {
        
        const isExitStudent = await StudentModel.findAll();
        res.status(200).json({
            status: true,
            message: 'Get students.',
            data: {
                isExitStudent
            }
        });
    } catch (error) {
        return next(error);
    }
};

exports.RemoveStudent = async (req, res, next) => {
    try {
        var { id } = req.body;
        console.log(req.body)
        if (!id) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitStudent = await StudentModel.findOne({ where: { id } });
        if (!isExitStudent) {
            return next(new AppError('Student not found.', 400));
        }
        await StudentModel.destroy({ where: { id } });
        res.status(200).json({
            status: true,
            message: 'Student delete successfully.',
            data: {}
        });
    } catch (error) {
        return next(error);
    }
};

exports.GetStudent = async (req, res, next) => {
    try {
        var { id } = req.params;
        if (!id) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitStudent = await StudentModel.findOne({ where: { id } });
        if (!isExitStudent) {
            return next(new AppError('Student not found.', 400));
        }
        res.status(200).json({
            status: true,
            message: 'Student get successfully.',
            data: { isExitStudent }
        });
    } catch (error) {
        return next(error);
    }
};

exports.studentUpdate = async (req, res, next) => {
    try {
        console.log(req.body)
        var { id, firstName, lastName, email, mobileNumber } = req.body;
        if (!id || !firstName || !lastName || !email || !mobileNumber) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitStudent = await StudentModel.findOne({ where: { id } });
        if (!isExitStudent) {
            return next(new AppError('Book is not available.', 400));
        }
        let checkStudentEmail = await StudentModel.findAll({
            where: [{
                "id": { [Op.ne]: id }
            }, {
                [Op.and]: {
                    "email": email
                }
            }]
        });
        if (checkStudentEmail.length > 0) {
            return next(new AppError('Email are already in.', 400));
        }
        let checkStudentMobile = await StudentModel.findAll({
            where: [{
                "id": { [Op.ne]: id }
            }, {
                [Op.and]: {
                    "mobileNumber": mobileNumber
                }
            }]
        });
        if (checkStudentMobile.length > 0) {
            return next(new AppError('Mobile are already in.', 400));
        }
        await StudentModel.update({ firstName, lastName, email, mobileNumber }, { where: { id } });
        res.status(200).json({
            status: true,
            message: 'Update student successfully.',
            data: {}
        });

    } catch (error) {
        return next(error);
    }
};






