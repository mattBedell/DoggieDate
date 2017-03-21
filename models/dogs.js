const db = require('./../lib/dbConnect.js');

function seperateDogs(data) {
  const storage = {};
  data.forEach((dog) => {
    storage[dog.id] = []
  })
  data.forEach((dog) => {
    storage[dog.id].push(dog)
  })
  return storage
}

function prepareDogRes(data) {
  let hotDogs = [];
  for(key in data) {
    data[key][0].attributes = [data[key][0].attr_id];
    delete data[key][0].attr_id;
    data[key].reduce((accu, current) => {
      accu.attributes = [...accu.attributes, current.attr_id];
      return accu
    })
    hotDogs.push(data[key][0])
  }
  return hotDogs;
}
// get dog by dog id
function getDogByID(req, res, next) {
  db.any({
    name: 'get Dog By dogID',
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

// get dog by dog id array
function dogList(req, res, next) {
  let { list } = req.body;
  list = JSON.parse(list);
  db.task((t) => t.batch(list.map((id) => {
    return db.any(`SELECT dogs.*, dog_attr_refs.attr_id FROM dogs
                      INNER JOIN dog_attr_refs
                        ON dogs.id = dog_attr_refs.dog_id
                      INNER JOIN d_attrs
                        ON dog_attr_refs.attr_id = d_attrs.id
                      WHERE dogs.member_id = $1;`, [id]).then((r) => seperateDogs(r))
                      .then((dogsObj) => prepareDogRes(dogsObj))
                      .catch((err) => console.log(`ERROR doglist db promise: ${err}`))
  }))).then((data) => res.send(data))


  // t.batch(list.map((id) => {
  //   return db.any(`SELECT dogs.*, dog_attr_refs.attr_id FROM dogs
  //                     RIGHT JOIN dog_attr_refs
  //                       ON dogs.id = dog_attr_refs.dog_id
  //                     RIGHT JOIN d_attrs
  //                       ON dog_attr_refs.attr_id = d_attrs.id
  //                     WHERE dogs.id = $1;`, [id]).then((r) => prepareDogRes(r))
  //                     .catch((err) => console.log(`ERROR doglist db promise: ${err}`))
  // }))).then((data) => res.send(data))

}

module.exports = {
  getDogByID,
  dogList
}
