const { Datatypes } = require('sequelize');
const ProjectModel = {
    id : {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Datatypes.STRING,
        allowNull: false
    },
    dateStart: {
        type: Datatypes.DATE,
        allowNull: false
    },
    dateEnd: {
        type: Datatypes.DATE,
        allowNull: true
    },

};