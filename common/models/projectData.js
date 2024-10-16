const { Datatypes } = require('sequelize');
const ProjectDataModel = {
    id : {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    project : {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Project',
            key: 'id'
        }
    },
    data : {
        type: Datatypes.TEXT,
        allowNull: false
    },
    datatype : {
        type: Datatypes.ENUM('url', 'git', 'techno', 'description'),
        allowNull: false
    }
};