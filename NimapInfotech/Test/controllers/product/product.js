
const Users = require('../../models/users/users');
const AppError = require('../../utils/appError');
const Product = require('../../models/products/products');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = require('../../database/database');

exports.addProduct = async (req, res, next) => {
    try {
        var { category3ID, Name, Price, Quantity } = req.body;
        if (!category3ID || !Name || !Price || !Quantity) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitAdmin = await Users.findOne({ where: [{ userID: req.user }, { 'userRoleID': 'Admin' }] });
        if (!isExitAdmin || isExitAdmin === null || isExitAdmin === undefined) {
            return next(new AppError('Only admin add products.', 400));
        }
        const isProducts = await Product.findAll({ where: { Name: Name } });
        if (isProducts.length > 0) {
            return next(new AppError('Product already exists.', 400));
        }
        const products = await Product.create(req.body);
        await products.save();
        res.status(200).json({
            status: true,
            message: 'New product add successfully.',
            data: {}
        });
    } catch (error) {
        return next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {

        var { productsID, Quantity } = req.body;
        if (!productsID || !Quantity) {
            return next(new AppError('Please enter required parameter.', 400));
        }

        const isExitAdmin = await Users.findOne({ where: [{ userID: req.user }, { 'userRoleID': 'Admin' }] });
        if (!isExitAdmin || isExitAdmin === null || isExitAdmin === undefined) {
            return next(new AppError('Only admin add products.', 400));
        }

        let getrecord
        await Product.update({ Quantity: Quantity }, { where: { productsID: productsID } }).then(async () => {
            getrecord = await Product.findOne({ where: { productsID: productsID } })

        })

        res.status(200).json({
            status: true,
            message: 'Update product successfully.',
            data: {
                getrecord
            },
        });
    }
    catch (error) {
        return next(error);
    }
};

exports.productList = async (req, res, next) => {
    try {
        let productsDetails = await Product.findAll();

        if (!productsDetails || productsDetails === null || productsDetails === undefined) {
            return next(new AppError('No Products found.', 400));
        }
        res.status(200).json({
            status: true,
            message: 'Get All Products.',
            data: {
                productsDetails
            },
        });
    }
    catch (error) {
        return next(error);
    }
};







