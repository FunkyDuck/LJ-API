const router = require('express').Router();

const FileController = require('./FileController');

router.get('/:id', FileController.getFile);
router.get('/', FileController.getAllFile);
router.post('/', FileController.postFile);
router.delete('/:id', FileController.deleteFile);

module.exports = router;