const express = require('express');

const router = express.Router();

require('./members')(router, 'members');







module.exports = router;