const db = require('./../lib/dbConnect');
const bcrypt = require('bcrypt');

function getGlobalUsers(req, res, next) {
  db.any({
    name: 'get user',
    text: `SELECT * FROM members WHERE picture != 'null'`
  })
  .then((userData) => {
    res.userData = userData;
    next()
  })
  .catch((err) => {
    console.log(`Error: user getGlobalUsers: ${err}`);
    next(err);
  })
}

function getMyInfo(req, res, next) {
  db.one({
    name: 'get my info',
    text: `SELECT * FROM members WHERE id = $1`,
    values: [req.params.id]
  })
  .then((userData) => {
    res.userData = userData;
    next()
  })
  .catch((err) => {
    console.log(`Error: user getMyInfo: ${err}`);
    next(err);
  })
}

function getDogs(req, res, next) {
  db.any({
    name: 'get dogs',
    text: `SELECT * FROM dogs WHERE member_id = $1`,
    values: [req.params.id]
  })
  .then((dogData) => {
    res.dogData = dogData;
    next()
  })
  .catch((err) => {
    console.log(`Error: user getDogs: ${err}`);
    next(err);
  })
}

function getDogAttributes(req, res, next) {
  const dogAttrs = [];
  res.dogData.forEach(function(dog) {
    dogAttrs.push(dog.id);
  });
  db.any({
    name: 'get dog attributes',
    text:  `SELECT * FROM d_attrs INNER JOIN dog_attr_refs ON dog_attr_refs.attr_id = d_attrs.id WHERE dog_attr_refs.dog_id = 1 OR dog_attr_refs.dog_id = 2 OR dog_attr_refs.dog_id = 0 OR dog_attr_refs.dog_id = 0 OR dog_attr_refs.dog_id = 0`,
    values: [dogAttrs[0], dogAttrs[1], dogAttrs[2], dogAttrs[3], dogAttrs[4]]
  })
  .then((dogAttrs) => {
    res.dogAttrs = dogAttrs;
    next()
  })
  .catch((err) => {
    console.log(`Error: user getDogAttributes: ${err}`);
    next(err);
  })
}

module.exports = {
  getMyInfo,
  getDogs,
  getDogAttributes,
  getGlobalUsers
}
