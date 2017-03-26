const db = require('./../lib/dbConnect.js');

function flattenAttributes(data) {
  return data.map((attr) =>
    attr.id);
}

function getAllAttributes(req, res, next) {
  db.many({
    name: 'get all atrributes from database',
    text: 'SELECT * FROM d_attrs;',
  })
  .then((data) => {
    res.data = data;
    next()
  }).catch((err) => {
    console.log('--> Err getAllAttributes');
    next(err);
  });
}
function getAttributesById(req, res, next) {
  db.any({
    name: 'get attrs by dog id',
    text: 'SELECT attr_id AS id FROM dog_attr_refs WHERE dog_id = $1;',
    values: [req.params.id],
  })
  .then((data) => {
    res.data = flattenAttributes(data);
    next();
  });
}

module.exports = {
  getAllAttributes,
  getAttributesById
};
