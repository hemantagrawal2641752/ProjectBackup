const DriverModel = require('../model/driver');
const BookModel = require('../model/book');
const AppError = require('../../../utils/appError');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../../DB/connection');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.addBook = async (req, res, next) => {
    try {
        var { title, description } = req.body;
        if (!title || !description) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitTitle = await BookModel.findOne({ where: { title } });
        if (isExitTitle) {
            return next(new AppError('Title is already in use.', 400));
        }
        const book = new BookModel(req.body);
        await book.save();

        res.status(200).json({
            status: true,
            message: 'Add book successfully.',
            data: {
                book
            }
        });
    } catch (error) {
        return next(error);
    }
};
exports.getBooks = async (req, res, next) => {
    try {
        const isExitBook = await BookModel.findAll();
        if (!isExitBook) {
            return next(new AppError('Books is not available.', 400));
        }
        res.status(200).json({
            status: true,
            message: 'Get all books.',
            data: isExitBook
        });
    } catch (error) {
        return next(error);
    }
};


exports.getBook = async (req, res, next) => {
    try {
        var { id } = req.params;
        if (!id) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitBook = await BookModel.findOne({ where: { id } });
        if (!isExitBook) {
            return next(new AppError('Book is not available.', 400));
        }
        res.status(200).json({
            status: true,
            message: 'Get book.',
            data: isExitBook
        });
    } catch (error) {
        return next(error);
    }
};

exports.bookUpdate = async (req, res, next) => {
    try {
        var { id, title, description } = req.body;
        if (!id || !title || !description) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitBook = await BookModel.findOne({ where: { id } });
        if (!isExitBook) {
            return next(new AppError('Book is not available.', 400));
        }
        let checkBooks = await BookModel.findAll({
            where: [{
                "id": { [Op.ne]: id }
            }, {
                [Op.and]: {
                    "title": title
                }
            }]
        });
        if (checkBooks.length > 0) {
            return next(new AppError('Book are already in.', 400));
        } else {
            await BookModel.update({ title, description }, { where: { id } });
            res.status(200).json({
                status: true,
                message: 'Update book successfully.',
                data: {}
            });
        }
    } catch (error) {
        return next(error);
    }
};

exports.bookDelete = async (req, res, next) => {
    try {
        var { id } = req.body;
        if (!id) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitBook = await BookModel.findOne({ where: { id } });
        if (!isExitBook) {
            return next(new AppError('Book is not available.', 400));
        }
        await BookModel.destroy({ where: { id } });
        res.status(200).json({
            status: true,
            message: 'Delete book successfully.',
            data: {}
        });
    } catch (error) {
        return next(error);
    }
};