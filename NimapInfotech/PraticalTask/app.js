const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const db = require('./DB/connection');
const globalErrorHandler = require('./utils/errorController');
const cors = require('cors')

//require routes
const initAPISVersions = require('./api');

//define body paresr
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));

app.use(cors())


//using routes
initAPISVersions(app,'')

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'Requested API not found',
  });
});

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log('mysql connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the mysql database:', error);
  }
};

testConnection();
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log('testing server is running.....');
});
