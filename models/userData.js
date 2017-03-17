const db = require('./../lib/dbConnect.js');

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
module.exports = {
  getMatches
}

// SELECT matches.id, matches.match FROM matches
// INNER JOIN members ON members.id = matches.match AND members.id != matches.member
// OR members.id != matches.match AND members.id = matches.member WHERE matches.member =
//   (SELECT id FROM members WHERE username = $1) OR matches.match =
//     (SELECT id FROM members WHERE username = $1);
