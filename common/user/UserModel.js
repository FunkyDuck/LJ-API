const DataTypes = require('sequelize');

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const Scopes = {
    instanceMethods: {
        toJSON: function () {
            const values = { ...this.get() };
            delete values.password;
            return values;
        }
    }
}

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define('user', UserModel, Scopes);
    },
    createUser: (user) => {
        return this.model.create(user);
    },
    findUser: (user) => {
        return this.model.findOne({
            where: {
                email: user,
            },
        });
    },
    updateUser: (id, user) => {
        return this.model.update(user, {
            where: {
                id: id,
            },
        });
    },
    deleteUser: (id) => {
        return this.model.destroy({
            where: {
                id: id,
            },
        });
    },
    loginUser: (user, password) => {
        
    },
};