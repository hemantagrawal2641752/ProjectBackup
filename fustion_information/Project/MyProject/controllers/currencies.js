var Currency = require('../services').Currency;


exports.currencyList = (req, res, next) => {
    var query = {};
    query.languageID = req.body.languageID;
    query.apiType = req.body.apiType;
    query.searchCondition = req.body.searchCondition;
	query.page = req.body.page;
	query.pagesize = req.body.pagesize || 10;
    query.apiVersion = req.body.apiVersion;
    
    Currency.getCurrencies(query, (ret) => {
        if(ret){
            res.json({
                status: "true",
                data: ret
                
                })
        }
        else
		{
			res.json({status: "false",
			data: ret.errors,
			message: 'Currency list not found!'})
		}

    });
};