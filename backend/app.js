const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Corrected MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://himanshusingh13012002:mmxdKbji0DlK8BIw@cluster0.a3jrnop.mongodb.net/';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware for parsing JSON requests
app.use(express.json());

// Define your routes here
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
