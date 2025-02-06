const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const path = require('path');

// Loading models
const HomeModel = require('./common/home/HomeModel');
const UserModel = require('./common/user/UserModel');

// Loading routes
const HomeRoute = require('./common/home/HomeRoute');
const UserRoute = require('./common/user/UserRoute');

// Loading routes with upload files
const ImageRoute = require('./common/image/ImageRoute');
const FileRoute = require('./common/file/FileRoute');

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(fileUpload());
app.use(express.json());
app.use(cors(corsOptions));

console.log("=====")
console.log(process.env.HOST)
console.log("=====")

// try {
//     const sequelize = new Sequelize('portfolio', 'root', 'root', {
//         host: 'localhost',
//         dialect: 'mysql'
//     });
// } catch (error) {
//     const sequelize = new Sequelize('portfolio', 'portfolio', 'H4rus4me!', {
//         host: 'localhost',
//         dialect: 'mysql'
//     });
// }


// Initialize Models
HomeModel.initialize(sequelize);
UserModel.initialize(sequelize);

sequelize
    .sync()
    .then(() => {
        // Loading routes
        app.use('/home', HomeRoute);
        app.use('/image', ImageRoute);
        app.use('/file', FileRoute);
        app.use('/user', UserRoute);

        app.use('/public/images', express.static(path.join(__dirname, 'public/images')));
        app.use('/public/files', express.static(path.join(__dirname, 'public/files')));

        // Start server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database: ', error);
    });
