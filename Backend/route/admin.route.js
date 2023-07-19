const express = require('express');
const { validateAdminDetails } = require('../middleware/validate.middleware');
const { loginValidate } = require('../middleware/login.validation');
const { registerAdmin, signInAdmin } = require('../controller/admin.controller');
const admin = express.Router();

admin.post("/registeradmin", validateAdminDetails, registerAdmin)
admin.post("/login", loginValidate, signInAdmin)
module.exports = admin