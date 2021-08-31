const router = require('express').Router();

const login = require('./login');
const users = require('./users');

router.use('/login', login);
router.use('/users', users);

module.exports = router;