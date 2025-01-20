const UserModel = require('./UserModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'MY-KEY';

module.exports = {
    createUser: async (req, res) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 14);
        console.log('::::::::::')
        console.log(await UserModel.findUser(user.email))
        console.log('::::::::::')
        if(await UserModel.findUser(user.email)){
            res.status(409).send({message: 'email is already in use'});
        }
        else {
            UserModel.createUser(req.body)
            .then((user) => {
                res.status(201).send({
                    message: 'user registered',
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
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
                    let token = await jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
                    res.status(200).send({
                        message: 'user connected',
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            createdAt: user.createdAt,
                            updatedAt: user.updatedAt
                        },
                        token: token
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