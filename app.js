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

const sequelize = new Sequelize('portfolio', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

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

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// app.post('/login', (req, res) => {
//     // Login logic
// });

// app.get('/user', (req, res) => {
//     // Get user logic
// });

// app.put('/user', (req, res) => {
//     // Update user logic
// });

// app.get('/home', (req, res) => {
//     // Home page logic
// });

// app.post('/home', cors(corsOptions), (req, res) => {
//     // Home page logic
//     console.log(req.body);
// });

// app.put('/home', (req, res) => {
//     // Home page logic
// });

// app.delete('/home', (req, res) => {
//     // Home page logic
// });

// app.get('/projects', (req, res) => {
//     // Projects page logic
    
// });

// app.post('/projects', (req, res) => {
//     // Projects page logic
// });

// app.put('/projects', (req, res) => {
//     // Projects page logic
// });

// app.delete('/projects', (req, res) => {
//     // Projects page logic
// });

// app.get('/contact', (req, res) => {
//     // Contact page logic
// });

// app.post('/contact', (req, res) => {
//     // Contact page logic
// });