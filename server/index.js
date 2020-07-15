const express = require('express');
const connectDB = require('../database/db');

const app = express();

// Connect database
connectDB();

// init Midlleware
app.use(express.json({ extended: false }));

// app.get('/api', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));
app.use('/api/courses', require('../routes/api/courses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
