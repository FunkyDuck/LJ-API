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
        console.info('FILES')
        console.log(req.files.files)
        const image = req.files.files;
        console.info('IMAGE');
        console.log(image);
        console.info('NAME');
        console.log(image.name);
        const root = __dirname.split('common')[0];

        const path = root + '/public/images/' + image.name;
        console.info('PATH');
        console.log(path);
        image.mv(path);
        res.status(201).send('createImage');
    },
    deleteImage: (req, res) => {
        res.status(204).send('deleteImage');
    }
};