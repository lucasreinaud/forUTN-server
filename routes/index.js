const router = require('express').Router();

const userController = require('../components/user/user.controller');
const calificationController = require('../components/calification/calification.controller');

router.use('/users', userController);
router.use('/califications', calificationController);

module.exports = router;
