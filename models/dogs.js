const db = require('./../lib/dbConnect.js');

function prepareDogRes(data) {
  data[0].attributes = [data[0].attr_id];
  delete data[0].attr_id;
  return data.reduce((accu, current) => {
    accu.attributes = [...accu.attributes, current.attr_id];
    return accu
  })
}

function getDogByID(req, res, next) {
  db.any({
    name: 'get Dog By ID',
    text: `SELECT dogs.*, dog_attr_refs.attr_id FROM dogs
            RIGHT JOIN dog_attr_refs
              ON dogs.id = dog_attr_refs.dog_id
            RIGHT JOIN d_attrs
              ON dog_attr_refs.attr_id = d_attrs.id
            WHERE dogs.id = $1;`,
    values: [req.params.id]
  }).then((r) => prepareDogRes(r))
  .then((data) => res.send(data))
}

function dogList(req, res, next) {
  let { list } = req.body;
  list = JSON.parse(list);
  db.task((t) => t.batch(list.map((id) => {
    return db.any(`SELECT dogs.*, dog_attr_refs.attr_id FROM dogs
                      RIGHT JOIN dog_attr_refs
                        ON dogs.id = dog_attr_refs.dog_id
                      RIGHT JOIN d_attrs
                        ON dog_attr_refs.attr_id = d_attrs.id
                      WHERE dogs.id = $1;`, [id]).then((r) => prepareDogRes(r))
                      .catch((err) => console.log(`ERROR doglist db promise: ${err}`))
  }))).then((data) => res.send(data))

}

module.exports = {
  getDogByID,
  dogList
}
