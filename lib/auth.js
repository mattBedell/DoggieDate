const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {

  jwt.verify(req.body.token, process.env.TOKEN_SECRET, (err, decoded) => {
    if(decoded) {
      res.token = decoded;
      next()
    } else {
      err.errLog = `Error: auth validateToken`
      next(err)
    }
  })
}

module.exports = {
  validateToken
}
