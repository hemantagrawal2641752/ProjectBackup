Node.js, Express & MySQL: Assignment
========

use this step =>

1. nodmon app.js
2. npm i nodemon
3. npm i express
4. npm i mysql
5. npm i express-myconnection
6. npm i body-parser
7. npm install ejs


**Creating database and table**

```
create database Hemant;

use Hemant;

CREATE TABLE tbl_employee (
user_id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
email varchar(100) NOT NULL,
Salary int(11) NOT NULL,
PRIMARY KEY (id)
);
```

Starting Project : http://localhost:3000/