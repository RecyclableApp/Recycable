//This model is used to create a new table for all user pickup requests (name, address, phone, type of recyclable, time, etc...)

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        quantity_in_lbs: {
            type: DataTypes.STRING
        },
        pickupStart: {
            type: DataTypes.STRING
        },
        pickupEnd: {
            type: DataTypes.STRING
        }

    });

    return User;
};