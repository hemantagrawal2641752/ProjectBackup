
let express = require('express')
let app = express();
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
let msg = {};

app.post('/', function (req, res, next) {
    req.getConnection(function (error, conn) {
        conn.query("SELECT csv_email_id FROM `tbl_users` WHERE csv_email_id !=''", function (err, result) {
            if (result.length > 0) {
                const jsonData = JSON.parse(JSON.stringify(result));
                const csvWriter = createCsvWriter({
                    path: "csv/" + Date.now() + ".csv",
                    header: [
                        { id: "csv_email_id", title: "csv_email_id" }
                    ]
                });
                csvWriter.writeRecords(jsonData)
                conn.query("UPDATE tbl_users SET csv_email_id = ''", function (err, result1) {
                    msg['status'] = true;
                    msg['message'] = "Csv file crated";
                    msg['data'] = {};
                    res.json(msg)
                })
            }
            else {
                msg['status'] = false;
                msg['message'] = "Data not found";
                msg['data'] = {};
                res.json(msg)
            }
        });
    });
})

module.exports = app
