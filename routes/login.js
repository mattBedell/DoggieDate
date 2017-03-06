const router = require('express').Router();
const login = require('./../models/login.js');
const jwt = require('jsonwebtoken');



router.route('/checkuser')
  .post(login.checkUser)
router.route('/create')
  .post(login.createUser, (req, res, next) => { res.send(res.token) })

router.route('/checkToken')
  .post((req, res, next) => {
    jwt.verify(req.body.token, process.env.TOKEN_SECRET, (err, decoded) => {
      console.log(decoded, err);
    })
  })


module.exports = router;
