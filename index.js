const express = require('express');

const user= require('./route/user.route');
const admin = require('./route/admin.route');
const { villa } = require('./route/villa.route');
const { booking } = require('./route/booking.route');
const cors = require('cors')
const app = express();
const port = 3006;

app.use(cors())
// Body Parser Middleware
app.use(express.json());

// Routes
app.use('/users', user);
app.use('/admins',admin)
app.use('/villas',villa)
app.use('/bookings',booking)
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});