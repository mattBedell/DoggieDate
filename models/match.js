const db = require('./../lib/dbConnect.js');

const sortIds = (id1, id2) => {
  return {
    maxId: Math.max(id1, id2),
    minId: Math.min(id1, id2),
  };
};

function request(req, res, next) {
  const { mId } = res.token;
  const { matchTo } = req.params;

  const { maxId, minId } = sortIds(mId, matchTo);

  db.one({
    name: 'save request',
    text: 'INSERT INTO requests(max_id, min_id, by_id) VALUES($1, $2, $3) RETURNING *;',
    values: [maxId, minId, mId],
  }).then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => console.log(`<---- Error match request: ${err}`))
}

module.exports = {
  request,
};
