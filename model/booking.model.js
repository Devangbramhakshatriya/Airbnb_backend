const { sequelize } = require("../db.js")
const { DataTypes } = require('sequelize');
const BookingModel = sequelize.define('booking', {
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    villainfo: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const value = this.getDataValue('villainfo');
            return value ? JSON.parse(value) : null;
          },
          set(value) {
            this.setDataValue('villainfo', value ? JSON.stringify(value) : null);
          },
    },
    
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    villaName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDates: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDates: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adults: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    children: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});


BookingModel.sync()
    .then(() => {
        console.log("Table Crated Successfully");
    })
    .catch((error) => {
        console.log(error);
    })
module.exports = { BookingModel }