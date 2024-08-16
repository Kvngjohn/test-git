const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Use the environment variable for the MongoDB connection URI
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
