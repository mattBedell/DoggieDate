const router = require('express').Router();
const auth = require('./../lib/auth.js');
const match = require('./../models/match.js');

const sendResponse = (req, res, next) => res.json(res.data);

router.route('/:matchTo')
  .get(auth.validateToken, match.request, sendResponse);


module.exports = router;
