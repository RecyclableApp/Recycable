module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
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

    return Student;
};