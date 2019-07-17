module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
    return Customer;
}