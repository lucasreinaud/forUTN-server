const router = require('express').Router();

const userController = require('../components/user/user.controller');
const calificationController = require('../components/calification/calification.controller');
const fileController = require('../components/file/file.controller');
const careerController = require('../components/career/career.controller');
const logController = require('../components/log/log.controller');
const parameterController = require('../components/parameter/parameter.controller');
const profileController = require('../components/profile/profile.controller');
const profileRouteController = require('../components/profileRoute/profileRoute.controller');
const relInputUserController = require('../components/relInputUser/relInputUser.controller');
const inputUserController = require('../components/input/input.controller');



router.use('/users', userController);
router.use('/califications', calificationController);
router.use('/files', fileController);
router.use('/careers', careerController);
router.use('/logs', logController);
router.use('/parameters', parameterController);
router.use('/profiles', profileController);
router.use('/profileRoutes', profileRouteController);
router.use('/relInputUsers', relInputUserController);
router.use('/inputUsers', inputUserController);



module.exports = router;
