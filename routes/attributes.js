const router = require('express').Router();
const auth = require('./../lib/auth.js');
const attr = require('./../models/attributes.js');
const delay = require('./../lib/networkDelay')(3000);

const sendResponse = (req, res, next) => {
  res.send(res.data);
}

router.route('/')
  .get(delay, auth.validateToken, attr.getAllAttributes, sendResponse)

module.exports = router;
