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
    updateHome: (home) => {
        return this.model.update(home, {
            where: {
                id: home.id
            }
        });
    },
    deleteHome: (home) => {
        return this.model.destroy({
            where: {
                id: home.id
            }
        });
    }
};