const router = require('express').Router();

const HomeController = require('./HomeController');

router.get('/', HomeController.getAllHome);
router.post('/', HomeController.createHome);
router.put('/', HomeController.updateHome);
router.delete('/', HomeController.deleteHome);

module.exports = router;