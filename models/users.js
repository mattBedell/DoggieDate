const db = require('./../lib/dbConnect');
const bcrypt = require('bcrypt');

function getMatches(req, res, next) {
  const username = res.token.username;
  db.any({
    name: 'get user matches',
    text: `SELECT matches.id, matches.match, members.username FROM matches
            INNER JOIN members ON members.id = matches.match WHERE matches.member =
              (SELECT id FROM members WHERE username = $1)
            UNION
            SELECT matches.id, matches.member AS match, members.username FROM matches
            INNER JOIN members ON members.id = matches.member WHERE matches.match =
              (SELECT id FROM members WHERE username = $1);
            `,
    values: [username]
  })
  .then((matches) => {
    res.data = {
      data: matches
    };
    next()
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

  // ADD ERROR HANDLING HERE <-------------------------------
  function getDatabasePromises(dog) {
    return new Promise(resolve => {
      return db.any({
        name: 'get dog attributes',
        text: `SELECT * FROM d_attrs INNER JOIN dog_attr_refs ON dog_attr_refs.attr_id = d_attrs.id WHERE dog_attr_refs.dog_id = $1`,
        values: [dog.id]
      }).then((data) => {
        dog.attrs = data;
        resolve(data)
      })
    })
  }
  const dogPromiseArr = res.dogData.map(getDatabasePromises);

  const dogAttrs = Promise.all(dogPromiseArr);

  dogAttrs.then(() => next());
}

function prepareResponse(req, res, next) {
  const userData = res.userData;
  const dogData = res.dogData;

  const resObj = {
    user_data: userData,
    dog_data: dogData
  }

  res.rows = resObj;
  next();
}

module.exports = {
  getMyInfo,
  getDogs,
  getDogAttributes,
  prepareResponse,
  getMatches
}
