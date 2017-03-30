const router = require('express').Router();
const users = require('./../models/users.js');
const auth = require('./../lib/auth.js');
const { seedDb } = require('./../models/makeUsers.js');
const delay = require('./../lib/networkDelay.js')(3000);

const sendResponse = (req, res, next) => {
  res.json(res.data)
};

router.route('/')
  .get(delay, auth.validateToken, users.getGlobalUsers, sendResponse);

router.route('/seed/:numberOfSeeds')
  .get(seedDb, (req, res, next) => { res.send('done...')});



module.exports = router;
