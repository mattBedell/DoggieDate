const router = require('express').Router();
const user = require('./../models/user.js');
const auth = require('./../lib/auth.js');
const { getMatches } = require('./../models/userData.js');


// router.route('/:id')
//   .get(user.getMyInfo, user.getDogs, user.getDogAttributes, user.prepareResponse, (req, res, next) => {res.send(res.rows) })

// GET CHATS ROUTE FOR TESTING PURPOSES
router.route('/getMatches')
  .get(auth.validateToken, getMatches, (req, res, next) => { res.json(Object.assign(res.data, res.auth))})

router.route('/')
  .get(user.getGlobalUsers, (req, res, next) => { res.send(res.userData) })

module.exports = router;
