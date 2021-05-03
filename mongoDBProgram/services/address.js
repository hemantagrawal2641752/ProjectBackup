
var models = require('../model');
var Address = models.Address;

exports.addAddress = async (query, cb) => {
	var queryObj = {};
	queryObj.countryID = query.countryID;
    queryObj.stateID = query.stateID;
    queryObj.cityID = query.cityID;
    queryObj.AddressName = query.AddressName;

    Address.insertMany(queryObj).then((data) => 
        {
            //console.log(data);
            cb(data);
        }).catch((err) => 
        {
            cb(err);
        })
}

exports.getAddress = (cb) => {
	
    Address.find().then((data) => 
        {
            //console.log(data);
            cb(data);
        }).catch((err) => 
        {
            cb(err);
        })
}

