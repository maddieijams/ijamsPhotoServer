require('dotenv').config();

const stripe = require("stripe")(process.env.SECRET_KEY);
let router = require('express').Router();

// const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// };

//   router.get("/", (req, res) => {
//     res.send({
//       message: "Hello Stripe checkout server!",
//       timestamp: new Date().toISOString()
//     });
//   });

// router.post("/", (req, res) => {
//     const body = {
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "usd"
//     };
//     stripe.charges.create(body, stripeChargeCallback(res));
// });

router.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "2000",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});
 


module.exports=router