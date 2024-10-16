const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/login', (req, res) => {
    // Login logic
});

app.get('/user', (req, res) => {
    // Get user logic
});

app.put('/user', (req, res) => {
    // Update user logic
});

app.get('/home', (req, res) => {
    // Home page logic
});

app.post('/home', (req, res) => {
    // Home page logic
});

app.put('/home', (req, res) => {
    // Home page logic
});

app.delete('/home', (req, res) => {
    // Home page logic
});

app.get('/projects', (req, res) => {
    // Projects page logic
});

app.post('/projects', (req, res) => {
    // Projects page logic
});

app.put('/projects', (req, res) => {
    // Projects page logic
});

app.delete('/projects', (req, res) => {
    // Projects page logic
});

app.get('/contact', (req, res) => {
    // Contact page logic
});

app.post('/contact', (req, res) => {
    // Contact page logic
});