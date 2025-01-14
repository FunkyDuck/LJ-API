const router = require('express').Router();

const UserController = require('./UserController');

router.get('/', UserController.getUser);
router.post('/', UserController.createUser);

module.exports = router;