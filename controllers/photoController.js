let router = require('express').Router();
let sequelize = require('../db');
const Photo = sequelize.import('../models/photoModel');

router.post('/create', (req, res) => {
    if(!req.errors) {
        const newPhoto = {
            title: req.body.title,
            imageURL: req.body.imageURL, 
            desc: req.body.desc,
            price: req.body.price
        }
        Photo.create(newPhoto)
        .then(photo => res.status(200).json(photo))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/getall', (req, res) => {
        Photo.findAll()
        .then(photos => res.status(200).json(photos))
        .catch(err => res.status(500).json({error: err}))
})

module.exports=router