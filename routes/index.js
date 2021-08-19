const router = require('express').Router();

const userController = require('../components/user/user.controller');
const calificationController = require('../components/calification/calification.controller');
const fileController = require('../components/file/file.controller');


router.use('/users', userController);
router.use('/califications', calificationController);
router.use('/file', fileController);


module.exports = router;
