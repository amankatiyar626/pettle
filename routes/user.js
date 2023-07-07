const express = require('express');

const user = require('../controller/user.js');
const router = express.Router();
router.post('/login',user.userLogin);

// router.post('/createaBooking',user.createBooking);




module.exports=router;