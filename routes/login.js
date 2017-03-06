const router = require('express').Router();
const login = require('./../models/login.js');



router.route('/checkuser')
  .post(login.checkUser)
router.route('/create')
  .post(login.createUser, (req, res, next) => { res.send(res.userData) })


module.exports = router;
