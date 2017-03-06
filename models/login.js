const db = require('./../lib/dbConnect');
const bcrypt = require('bcrypt');

function createUser(req, res, next) {

  db.one({
    name: 'create user',
    text: `INSERT INTO members(first, last, username, password, salt, zip) VALUES(
            $1, $2, $3, $4, $5, $6)
          RETURNING first, last, username, zip`,
    values: [req.body.userData.first, req.body.userData.last, req.body.userData.username, req.body.userData.password, req.body.userData.salt, req.body.userData.zip]
  })
  .then((userData) => {
    res.userData = userData;
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
