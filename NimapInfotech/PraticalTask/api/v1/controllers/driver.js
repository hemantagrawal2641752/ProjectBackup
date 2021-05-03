const DriverModel = require('../model/driver');
const DriverLocationModel = require('../model/driverlocation');
const AppError = require('../../../utils/appError');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../../DB/connection');

exports.registerDriver = async (req, res, next) => {
    try {
        var { name, email, phone_number, license_number, car_number, } = req.body;
        if (!name || !email || !phone_number || !license_number || !car_number) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitEmail = await DriverModel.findOne({ where: { email } });
        if (isExitEmail) {
            return next(new AppError('Email is already in use.', 400));
        }
        const isExitMobile = await DriverModel.findOne({ where: { phone_number } });
        if (isExitMobile) {
            return next(new AppError('Mobile number is already in use.', 400));
        }
        const user = new DriverModel(req.body);
        await user.save();

        res.status(200).json({
            status: true,
            message: 'Register successfully.',
            data: {
                user
            }
        });
    } catch (error) {
        return next(error);
    }
};

exports.avaliableCabs = async (req, res, next) => {
    try {
        var { latitude, longitude } = req.body;
        if (!latitude || !longitude) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isAvailableDriver = await DriverLocationModel.findAll({ where: { available: 'Yes' } });
        if (isAvailableDriver == null) {
            return next(new AppError('Cabs is not available.', 400));
        } else {
            if (isAvailableDriver.length > 0) {
                let statment = "SELECT distinct(tdd.`driver_id`),(((acos(sin(('" + latitude + "'*pi()/180)) * sin((`latitude`*pi()/180))+cos(('" + latitude + "' *pi()/180)) * cos((`latitude`*pi()/180)) * cos((('" + longitude + "' - `longitude`)*pi()/180))))*180/pi())*60*1.1515*1.609344) as distance FROM `driver_location` as tdd WHERE available = 'Yes' HAVING distance < 5 ORDER BY `distance` ASC";
                const driverList = await sequelize.query(statment, { type: QueryTypes.SELECT });
                if (driverList.length > 0) {
                    let driverDetiles = []
                    for (let index = 0; index < driverList.length; index++) {
                        const element = driverList[index].driver_id;
                        const isDriverGet = await DriverModel.findOne({ attributes: ['id', 'name', 'phone_number', 'car_number'], where: { id: element } });
                        driverDetiles.push(isDriverGet)
                    }
                    res.status(200).json({
                        status: true,
                        message: 'Available cabs.',
                        data: driverDetiles
                    });
                } else {
                    res.status(200).json({
                        status: true,
                        message: 'No cabs available.',
                        data: {}
                    });
                }
            } else {
                return next(new AppError('Cabs is not available.', 400));
            }
        }
    } catch (error) {
        return next(error);
    }
};

exports.sendLocation = async (req, res, next) => {
    try {
        var { driver_id, latitude, longitude } = req.body;
        if (!driver_id || !latitude || !longitude) {
            return next(new AppError('Please enter required parameter.', 400));
        }
        const isExitDriver = await DriverModel.findOne({ where: { id: driver_id } });
        if (!isExitDriver) {
            return next(new AppError('Driver is not available.', 400));
        }
        let checkLatitude = isFinite(latitude) && Math.abs(latitude) <= 90;
        let checkLongitude = isFinite(longitude) && Math.abs(longitude) <= 180;

        if (checkLatitude == false) {
            return next(new AppError('Please enter a valid latitude.', 400));
        }
        if (checkLongitude == false) {
            return next(new AppError('Please enter a valid longitude.', 400));
        }
        const isExitDriverLocation = await DriverLocationModel.findOne({ where: { driver_id } });
        if (!isExitDriverLocation) {
            const driverLocation = new DriverLocationModel(req.body);
            await driverLocation.save();
        } else {
            await DriverLocationModel.update(req.body, { where: { driver_id } })
        }

        res.status(200).json({
            status: true,
            message: 'Driver location inserted successfully.',
            data: {}
        });
    } catch (error) {
        return next(error);
    }
};
