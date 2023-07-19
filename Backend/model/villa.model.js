const { sequelize } = require("../db")
const { DataTypes } = require('sequelize');
const VillaModel = sequelize.define('villa', {
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maxcapacity: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    mincapacity: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false
    },
    beds: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    amenities: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const value = this.getDataValue('amenities');
            return value ? JSON.parse(value) : null;
        },
        set(value) {
            this.setDataValue('amenities', value ? JSON.stringify(value) : null);
        },
    },
    meals: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const value = this.getDataValue('meals');
            return value ? JSON.parse(value) : null;
        },
        set(value) {
            this.setDataValue('meals', value ? JSON.stringify(value) : null);
        },
    },
    checkinafter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checkoutbefore: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bookedDates: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            const value = this.getDataValue('bookedDates');
            return value ? JSON.parse(value) : null;
        },
        set(value) {
            this.setDataValue('bookedDates', value ? JSON.stringify(value) : null);
        },
    },
}, {
    timestamps: false
});


VillaModel.sync()
    .then(() => {
        console.log("Table Crated Successfully");
    })
    .catch((error) => {
        console.log(error);
    })

module.exports = { VillaModel }