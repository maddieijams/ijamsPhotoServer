require('dotenv').config();

const express = require('express'); 
const app = express();
const sequelize = require('./db');
const cors = require("cors");
const payment = require('./routes/payment')
const create = require('./controllers/photoController')
const bodyParser = require('body-parser');

sequelize.sync();

app.use(cors());

app.use(express.static("public"));

app.use(require("body-parser").text());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./middleware/headers'));

app.use('/photo', create);
app.use('/payment', payment);

  
app.listen(3050, () => console.log(`Photo Storefront listening on port ${process.env.PORT}!`));