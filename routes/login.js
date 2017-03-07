const router = require('express').Router();
const login = require('./../models/login.js');
const auth = require('./../lib/auth.js')
const jwt = require('jsonwebtoken');

const tempErrorHandler = (err, req, res, next) => {
  console.log(`${err.errLog}: ${err}`);
  res.send(err)
}

router.route('/checkuser')
  .post(login.checkUser)

router.route('/create')
  .post(login.createUser, (req, res, next) => {res.send(res.token.data)}, (req, res, next) => { res.send(res.token) })

router.route('/checkToken')
  .post(auth.validateToken, tempErrorHandler)


module.exports = router;
