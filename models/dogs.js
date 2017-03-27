const db = require('./../lib/dbConnect.js');

function getGlobalDogs(req, res, next) {
  db.any({
    name: 'get dogs',
    text: `SELECT * FROM dogs WHERE picture != 'null'`,
  })
  .then((dogData) => {
    res.data = dogData;
    next();
  })
  .catch((err) => {
    console.log(`Error: dogs getGlobalDogs: ${err}`);
    next(err);
  });
}

module.exports = {
  getGlobalDogs
}
