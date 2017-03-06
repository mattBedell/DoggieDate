const db = require('./../lib/dbConnect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function createUser(req, res, next) {

  db.one({
    name: 'create user',
    text: `INSERT INTO members(first, last, username, password, email, salt, zip) VALUES(
            $1, $2, $3, $4, $5, $6, $7)
          RETURNING username`,
    values: [req.body.first, req.body.last, req.body.username, req.body.password, req.body.email, req.body.salt, req.body.zip]
  })
  .then((userData) => {

    let token = jwt.sign({
      data: {user: userData.username}
    }, process.env.TOKEN_SECRET, { expiresIn: '10s' });
    console.log(token);
    next()
  })
  .catch((err) => {
    console.log(`Error: login createUser: ${err}`);
    next(err);
  })
}

function checkUser(req, res, next) {
  const askUser = req.body.username;
  const askEmail = req.body.email;

  db.one({
    name: 'check user',
    text: `SELECT EXISTS(SELECT 1 FROM members WHERE username = $1)
              AS isUser,
            EXISTS(SELECT 1 FROM members WHERE email = $2)
              AS isEmail`,
    values: [req.body.username, req.body.email]
  }).then((checkUser) => {
    res.json(checkUser);
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
