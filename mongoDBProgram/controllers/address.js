var Address = require('../services').Address;

exports.add = async (req, res, next) => {
    var query = {};
    query.countryID = req.body.countryID;
    query.stateID = req.body.stateID;
    query.cityID = req.body.cityID;
    query.AddressName = req.body.AddressName;

    Address.addAddress(query, (ret) => {
        
        if (ret) {
            res.json({
                status: "true",
                data: ret[0],
                message: 'Address added successfully.'
            })
        } else {
            res.json({
                status: "false",
                data: ret.errors,
                message: ''
            })
        }
    });

};


exports.addressList = async (req, res, next) => {

    setTimeout(function()
    { 
        console.log("hii"); 
    }, 0);


    Address.getAddress((ret) => {

        if (ret) {
            res.json({
                status: "true",
                data: ret

            })
        }
        else {
            res.json({
                status: "false",
                data: ret.errors,
                message: 'Address data not found!'
            })
        }
    });
};