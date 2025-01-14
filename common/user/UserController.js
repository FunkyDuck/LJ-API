const UserModel = require('./UserModel');

module.exports = {
    createUser: (req, res) => {
        UserModel.createUser(req.body)
            .then((user) => {
                res.status(201).send(user);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    getUser: (req, res) => {
        UserModel.findUser(req.body)
            .then((user) => {
                res.status(200).send(user);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
};