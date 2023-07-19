const { sequelize} = require("../db.js")
const { DataTypes } = require('sequelize');
const UserModel = sequelize.define('user', {
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
sequelize.sync(()=>{
    console.log("Connected To Users")
})
module.exports = { UserModel }