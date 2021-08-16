const router = require('express').Router();

const userController = require('../components/user/user.controller');

router.use('/user', userController);

module.exports = router;
