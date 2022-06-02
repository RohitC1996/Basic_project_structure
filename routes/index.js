const express = require('express');
const router = express.Router();
module.exports ={
    staffRoutes : router.use('/staff' ,require('./staffRoutes'))
}