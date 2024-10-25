const { DataTypes } = require('sequelize');

const HomeModel = {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lang: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'fr'
    }
};

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define('home', HomeModel);
    },
    createHome: (home) => {
        return this.model.create(home);
    },
    findAllHome: () => {
        return this.model.findAll();
    },
    updateHome: (id, home) => {
        return this.model.update(home, {
            where: {
                id: id
            }
        });
    },
    deleteHome: (id) => {
        return this.model.destroy({
            where: {
                id: id
            }
        });
    }
};