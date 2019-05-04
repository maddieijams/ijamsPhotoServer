module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('photo', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    })
    return Photo;
}

