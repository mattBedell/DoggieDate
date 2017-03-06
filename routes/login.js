const router = require('express').Router();
const login = require('./../models/login.js');


router.route('/')
  .post(login.createUser, (req, res, next) => { res.send(res.userData) })


module.exports = router;
