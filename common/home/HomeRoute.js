const router = require('express').Router();

const HomeController = require('./HomeController');

router.get('/', HomeController.getAllHome);
router.post('/', HomeController.createHome);
router.put('/:id', HomeController.updateHome);
router.delete('/:id', HomeController.deleteHome);

module.exports = router;