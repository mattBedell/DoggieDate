const router = require('express').Router();
const auth = require('./../lib/auth.js');
const dogs = require('./../models/dogs.js')

const simulateNetworkDelay = (req, res, next) => {
  setTimeout(() => {
    next()
  }, 2000)
}
router.route('/:id')
  .get(dogs.getDogByID)

router.route('/doglist')
  .post(simulateNetworkDelay, dogs.dogList)

module.exports = router;
