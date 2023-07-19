
const express = require('express');
const {registerUser, signInUser, getAllusers, deleteUser} = require('../controller/user.controller');
const { validateDetails } = require('../middleware/validate.middleware');
const { loginValidate } = require('../middleware/login.validation');
const user = express.Router();

user.post('/register',validateDetails, registerUser);
user.post('/login',loginValidate, signInUser);
user.get('/allusers',getAllusers)
user.delete('/deleteuser',deleteUser)
module.exports = user;