module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING
        },
        GPA: {
            type: DataTypes.FLOAT
        }
    });

    return Student;
};