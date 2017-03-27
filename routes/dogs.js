const router = require('express').Router();
const auth = require('./../lib/auth.js');
const dogs = require('./../models/dogs.js')
const delay = require('./../lib/networkDelay.js')(3000);


router.route('/')
  .get(delay, auth.validateToken, dogs.getGlobalDogs, (req, res, next) => res.json(res.data))

module.exports = router;
