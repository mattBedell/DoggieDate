const db = require('./../lib/dbConnect.js');

function getAllAttributes(req, res, next) {
  db.many({
    name: 'get all atrributes from database',
    text: 'SELECT * FROM d_attrs;'
  })
  .then((data) => {
    res.data = data;
    next()
  }).catch((err) => {
    console.log('--> Err getAllAttributes');
    next(err);
  });
}

module.exports = {
  getAllAttributes,
};
