require('dotenv').config();
const router = require('express').Router();
const sequelize = require('../db');
const stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "2000",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router