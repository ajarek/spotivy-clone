const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/auth')

let Name
let Name1
router.get('/spotify',authenticate, (req, res) => {
    Name= req.query.data
   Name1= Name[0].toUpperCase()+Name.slice(1).toLowerCase()
    res.render('spotify',{data:Name,data1:Name1})
})
module.exports = router