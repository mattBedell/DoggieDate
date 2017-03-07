const router = require('express').Router();
const user = require('./../models/user.js');

router.route('/:id')
  .get(user.getMyInfo, user.getDogs, user.getDogAttributes, user.prepareResponse, (req, res, next) => {res.send(res.rows) })

router.route('/')
  .get(user.getGlobalUsers, (req, res, next) => { res.send(res.userData) })


module.exports = router;
