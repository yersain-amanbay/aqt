const express = require('express');
const router = express.Router();

const home = require('../app/home');
const invite = require('../app/invite');

router.get('/', home.start);
router.get('/invite', invite.start);

module.exports = router;