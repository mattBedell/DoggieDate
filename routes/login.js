const router = require('express').Router();
const login = require('./../models/login.js');
const auth = require('./../lib/auth.js')
const jwt = require('jsonwebtoken');

const tempErrorHandler = (err, req, res, next) => {
  console.log(`${err.errLog}: ${err}`);
  res.send(err)
}

router.route('/create')
  .post(auth.generateToken, auth.generatePassHash, login.createUser, (req, res, next) => { res.send(res.token) })

router.route('/checkToken')
  .post(auth.validateToken, tempErrorHandler)

// TEMP GET TOKEN FOR TESTING PUPROSES
router.route('/getToken/:username')
  .get((req, res, next) => { req.body.username = req.params.username; next()}, auth.generateToken, (req, res, next) => { res.send(res.token)})



module.exports = router;
