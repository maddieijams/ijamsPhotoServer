const router = require('express').Router();
const sequelize = require('../db');
const Customer = sequelize.import('.././models/customerModel');

router.post('/customer', (req, res) => {
    if (!req.errors) {
      const newCustomer = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email
      }
      Customer.create(newCustomer)
        .then(customer => res.status(200).json(customer))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

  module.exports=router