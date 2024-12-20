// Create web server 
// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route to get comments
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, text: 'This is the first comment' },
        { id: 2, text: 'This is the second comment' }
    ]);
});

// Sample route to post a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    // In a real application, you would save the comment to a database
    res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});