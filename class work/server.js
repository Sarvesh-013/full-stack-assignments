const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log messages to the console
app.use((req, res, next) => {
    console.log("This is my first message");
    
});

// Route to send response to the browser
app.get('/', (req, res) => {
    res.send("Welcome to KCT learning");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
