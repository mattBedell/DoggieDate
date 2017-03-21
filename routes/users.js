const router = require('express').Router();
const user = require('./../models/users.js');
const auth = require('./../lib/auth.js');
const { seedDb } = require('./../models/makeUsers.js');

// Simulate delay of response for testing front end
const simulateNetworkDelay = (req, res, next) => {
  setTimeout(() => {
    next()
  }, 2000)
}
// router.route('/:id')
//   .get(user.getMyInfo, user.getDogs, user.getDogAttributes, user.prepareResponse, (req, res, next) => {res.send(res.rows) })

// GET CHATS ROUTE FOR TESTING PURPOSES
// router.route('/getMatches')
//   .get(auth.validateToken, getMatches, (req, res, next) => { res.json(Object.assign(res.data, res.auth))})

// ROUTE TO SEED DATABASE OF FAKE USERS
// router.route('/makeUsers')
//   .get()
router.route('/seed/:numberOfSeeds')
  .get(seedDb, (req, res, next) => { res.send('done...')})

router.route('/')
  .get(simulateNetworkDelay, auth.validateToken, user.getGlobalUsers, (req, res, next) => res.json(res.data))

module.exports = router;
