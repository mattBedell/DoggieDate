const router = require('express').Router();
const user = require('./../models/user.js');
const auth = require('./../lib/auth.js');
const { getChats } = require('./../models/userData.js');


// router.route('/:id')
//   .get(user.getMyInfo, user.getDogs, user.getDogAttributes, user.prepareResponse, (req, res, next) => {res.send(res.rows) })

// GET CHATS ROUTE FOR TESTING PURPOSES
router.route('/getChats')
  .get(auth.validateToken, getChats, (req, res, next) => { res.json(res.chats)})

router.route('/')
  .get(user.getGlobalUsers, (req, res, next) => { res.send(res.userData) })

module.exports = router;
