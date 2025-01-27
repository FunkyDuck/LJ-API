module.exports = {
    getFile: (req, res) => {
        res.status(200).send();
    },
    getAllFile: (req, res) => {
        res.status(200).send();
    },
    postFile: (req, res) => {
        // Get file from request and store it in the public folder
        if (!req.files) {
            return res.status(400).send('No files were uploaded.');
        }
        const fs = require('fs');
        const path = require('path');
        const crypto = require('crypto');
        const file = req.files.files;
        // reset filename with sanitize file name
        const newFileName = `${file.name.replace(/[^a-zA-Z0-9_\-.]/g, "_")}`;
        const uploadPath = path.join(__dirname.split('common')[0], 'public/files', newFileName);

        // Move file to the directory
        file.mv(uploadPath, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            const srv = (req.hostname === 'localhost')? `http://${req.hostname}:3000` : `https://${req.hostname}`;
            res.status(201).send({
                message: 'File uploaded successfully.',
                filename: newFileName,
                path: `${srv}/public/files/${newFileName}`,
            });
        });
    },
    deleteFile: (req, res) => {
        res.status(200).send();
    }
}