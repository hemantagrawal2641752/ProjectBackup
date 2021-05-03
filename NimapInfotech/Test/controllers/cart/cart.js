
const Users = require('../../models/users/users');
const AppError = require('../../utils/appError');
const Product = require('../../models/products/products');
const Cart = require('../../models/cart/cart');
const CartProduct = require('../../models/cart/cartProducts');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = require('../../database/database');

exports.AddToCartUsers = async (req, res, next) => {
    try {
        var { userID, totalAmount } = req.body;
        if (!userID || !totalAmount) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        let totalQuantity = 0;
        let percichProducts = req.body.percichProducts;
        for (let i = 0; i < percichProducts.length; i++) {
            if ((!percichProducts[i].productsID || !percichProducts[i].Quantity || !percichProducts[i].netAmount)) {
                return next(new AppError('Please enter required parameter.', 400));
            } else {
                totalQuantity += Number(percichProducts[i].Quantity);
            }
        }
        let Obj = {
            "userID": userID,
            "totalQuantity": totalQuantity,
            "netAmount": totalAmount,
        }
        let cartGetDetiles = await Cart.create(Obj);
        percichProducts.map(async (p, i) => {
            p.cartID = cartGetDetiles.cartID
            await CartProduct.create(p);
            const isGetProductQuantity = await Product.findOne({ where: { productsID: p.productsID } });
            let ProductQuantitySet = isGetProductQuantity.Quantity - p.Quantity;
            await Product.update({ Quantity: ProductQuantitySet }, { where: { productsID: p.productsID } })
        })
        res.status(200).json({
            status: true,
            message: "Product purchase successFully.",
            data: {},
        });
    } catch (error) {
        return next(error);
    }
};

exports.CheckProductQuantity = async (req, res, next) => {
    try {

        var { productsID, Quantity } = req.body;
        if (!productsID || !Quantity) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        let results;
        const isExitProduct = await Product.findOne({ where: { productsID: productsID } });
        if (Quantity <= isExitProduct.Quantity) {
            results = "You've changed '" + isExitProduct.Name + "' QUANTITY to '" + Quantity + "'.";
        } else {
            return next(new AppError("We're sorry! Only " + isExitProduct.Quantity + " units allowed in each order.", 400));
        }

        res.status(200).json({
            status: true,
            message: results,
            data: {},
        });
    } catch (error) {
        return next(error);
    }
};









