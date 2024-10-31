module.exports = {
    getImage: (req, res) => {
        res.status(200).send('getImage');
    },
    getAllImage: (req, res) => {
        res.status(200).send('getAllImage');
    },
    createImage: (req, res) => {
        // Get image from request and store it in the public folder
        if (!req.files) {
            return res.status(400).send('No files were uploaded.');
        }
        const fs = require('fs');
        const path = require('path');
        const crypto = require('crypto');
        const image = req.files.files;
        // Create new filename with an uuid
        const newFileName = `${crypto.randomUUID()}${path.extname(image.name)}`;
        const uploadPath = path.join(__dirname.split('common')[0], 'public/images', newFileName);

        // Move file to the directory
        image.mv(uploadPath, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            const srv = (req.hostname === 'localhost')? `http://${req.hostname}:3000` : `https://${req.hostname}`;
            res.status(201).send({
                message: 'File uploaded successfully.',
                filename: newFileName,
                path: `${srv}/public/images/${newFileName}`,
            });
        });
    },
    deleteImage: (req, res) => {
        res.status(204).send('deleteImage');
    }
};