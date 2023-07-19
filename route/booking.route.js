const express = require('express');
const { auth } = require('../middleware/auth.midddleware');
const { bookingAdd, bookingGetAll, deletebooking, bookingGet } = require('../controller/booking.controller');
const booking = express.Router();

booking.post("/booking",auth,bookingAdd)
booking.post("/adminbooking", bookingAdd)
booking.get("/",bookingGet)
booking.get("/getbooking",auth,bookingGetAll)
booking.delete("/delete/:id",deletebooking)
module.exports={booking}