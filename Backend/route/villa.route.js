const express = require('express');
const { villaAdd, villaGet, singleVilla, updatevilla, deleteVilla } = require('../controller/villa.controller');
const { auth } = require('../middleware/auth.midddleware');
const { generateUniqueSlug } = require('../middleware/generateSlug.middleware');
const villa = express.Router();

villa.post("/addvilla",auth,generateUniqueSlug,villaAdd)
villa.get("/",villaGet)
villa.get("/:slug",singleVilla)
villa.patch('/update/:productId', updatevilla)
villa.delete('/delete/:id',deleteVilla)
module.exports={villa}