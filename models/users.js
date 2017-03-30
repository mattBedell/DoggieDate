const db = require('./../lib/dbConnect');

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
    next();
  });
}

function getGlobalUsers(req, res, next) {
  const { mId } = res.token;
  db.any({
    name: 'get global users',
    text: 'SELECT id, username, picture FROM members;',
  })
  .then((data) => {
    res.data = data;
    next();
  }).catch((err) => console.log(`<---- ERROR getGlobalUsers: ${err}`));
}

module.exports = {
  getMatches,
  getGlobalUsers,
};
