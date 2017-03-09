const db = require('./../lib/dbConnect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function createUser(req, res, next) {
  const { first, last, username, email, zip } = req.body;
  db.one({
    name: 'create user',
    text: `INSERT INTO members(first, last, username, password, email, zip) VALUES(
            $1, $2, $3, $4, $5, $6)
          RETURNING username`,
    values: [first, last, username, res.passwordHash, email, zip]
  })
  .then((userData) => {
    res.username = userData;
    next();
  })
  .catch((err) => {
    console.log(`Error: login createUser: ${err}`);
    next(err);
  })
}

function checkUser(req, res, next) {
  const  { username, email } = req.body;

  db.one({
    name: 'check user',
    text: `SELECT EXISTS(SELECT 1 FROM members WHERE username = $1)
              AS isUser,
            EXISTS(SELECT 1 FROM members WHERE email = $2)
              AS isEmail`,
    values: [username, email]
  }).then((checkUser) => {
    res.checkUser = checkUser;
    next()
  })
  .catch((err) => {
    console.log(`Error: login  checkUser: ${err}`);
    next(err);
  })
}


module.exports = {
  createUser,
  checkUser
}
