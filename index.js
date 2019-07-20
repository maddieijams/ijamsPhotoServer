require('dotenv').config();

const express = require('express'); 
const app = express();
const sequelize = require('./db');
const cors = require("cors");
const payment = require('./routes/payment')
const photo = require('./controllers/photoController')
const address = require('./controllers/addressController')

sequelize.sync();

app.use(cors());

app.use(express.static("public"));

app.use(require("body-parser").text());
app.use(require("body-parser").json());

app.use(require('./middleware/headers'));

app.use('/photo', photo);
app.use('/address', address)
app.use('/payment', payment);

  
app.listen(process.env.PORT || 5000, () => console.log(`Photo Storefront listening on port ${process.env.PORT}!`));