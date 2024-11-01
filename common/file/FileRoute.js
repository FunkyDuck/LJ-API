const router = require('express').Router();

const FileController = require('./FileController');

router.get('/:id', FileController.getFile);
router.get('/', FileController.getAll);
router.post('/', FileController.postFile);
router.delete('/:id', FileController.deleteFile);

module.exports = router;