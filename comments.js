// Create web server application
// 1. Load the express module
// 2. Create an express application
// 3. Define routes
// 4. Start the server and listen on port 3000

// 1. Load the express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Define routes
// GET /
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// 4. Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});