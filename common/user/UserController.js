const UserModel = require('./UserModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async (req, res) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 14);
        if(!UserModel.findUser(user.email)){
            UserModel.createUser(req.body)
            .then((user) => {
                res.status(201).send({
                    message: 'user registered',
                    user: user
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
        }
        else {
            res.status(409).send({message: 'email is already in use'});
        }
    },
    login: async (req, res) => {
        const user = await UserModel.findUser(req.body.email);
        try {
            if(!user){
                res.status(400).send({message: 'wrong credentials'});
            }
            else {
                const validPassword = await bcrypt.compare(req.body.password, user.password);

                console.log('validPassword :: ', validPassword)

                if(validPassword){
                    // let userClone = {...user.toJson()};
                    // console.log(userClone)
                    // delete user.password;
                    // console.log(userClone)
                    // TODO :: Create JWT token and send it
                    res.status(200).send({
                        message: 'user connected',
                        user: user.toJSON()
                    });
                }
                else {
                    res.status(400).send({message: 'wrong credentials'});
                }
            }
        } catch (error) {
            res.status(500).send({
                message: 'Problem with login',
                error: error
            })
        }
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