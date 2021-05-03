const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const db = require('./database/database');
const globalErrorHandler = require('./utils/errorController');

//require routes
const usersRoutes = require('./routes/users/users');
const categoryRoutes = require('./routes/category/category');
const productRoutes = require('./routes/product/product');
const AddToCartRoutes = require('./routes/cart/cart');

//define body paresr
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', extended: true, parameterLimit: 50000 }));


app.use(cors());

//using routes
app.use('/users', usersRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/addToCart', AddToCartRoutes);

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
