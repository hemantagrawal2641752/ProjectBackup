const AppError = require('../../utils/appError');
const Category1 = require('../../models/category/category1');
const Category2 = require('../../models/category/category2')
const Category3 = require('../../models/category/category3')

exports.category1 = async (req, res, next) => {
    try {
        const isCategory = await Category1.findAll();

        res.status(200).json({
            status: true,
            message: 'Get All categorys.',
            data: {
                isCategory
            }
        });
    } catch (error) {
        return next(error);
    }
};

exports.category2 = async (req, res, next) => {
    try {

        var { category1ID } = req.body;
        if (!category1ID) {
            return next(new AppError('Please enter required parameter.', 400));
        }

        let category2Details = await Category2.findAll({ where: { category1ID: category1ID } });

        res.status(200).json({
            status: true,
            message: 'Get All categorys2.',
            data: {
                category2Details
            },
        });
    }
    catch (error) {
        return next(error);
    }
};

exports.category3 = async (req, res, next) => {
    try {
        var { category2ID } = req.body;
        if (!category2ID) {
            return next(new AppError('Please enter required parameter.', 400));
        }

        let category3Details = await Category3.findAll({ where: { category2ID: category2ID } });

        res.status(200).json({
            status: true,
            message: 'Get All categorys3.',
            data: {
                category3Details
            },
        });
    }
    catch (error) {
        return next(error);
    }
};







