const { Datatypes } = require('sequelize');
const HomeModel = {
    id : {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Datatypes.STRING,
        allowNull: false
    },
    content: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    lang: {
        type: Datatypes.STRING(2),
        allowNull: false,
        defaultValue: 'fr'
    }
};