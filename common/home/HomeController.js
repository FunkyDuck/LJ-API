const HomeModel = require('./HomeModel');

module.exports = {
    createHome: (req, res) => {
        console.log('Home CREATOR');
        HomeModel.createHome(req.body)
            .then((home) => {
                res.status(201).send(home);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    getAllHome: (req, res) => {
        HomeModel.findAllHome()
            .then((homes) => {
                res.status(200).send(homes);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    updateHome: (req, res) => {
        const id = req.params.id;

        HomeModel.updateHome(id, req.body)
            .then((home) => {
                res.status(200).send(home);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deleteHome: (req, res) => {
        const id = req.params.id;

        HomeModel.deleteHome(id)
            .then(() => {
                res.status(204).send();
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
};