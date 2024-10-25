const router = require('express').Router();

const ImageController = require('./ImageController');

router.get('/:id', ImageController.getImage);
router.get('/', ImageController.getAllImage);
router.post('/', ImageController.createImage);
router.delete('/:id', ImageController.deleteImage);

module.exports = router;