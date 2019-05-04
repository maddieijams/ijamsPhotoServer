const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

sequelize.authenticate().then(() => console.log('ready to sell some picss'),
(err => console.log(err)))

module.exports=sequelize