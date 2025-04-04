require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('./service');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



// Create user
app.post('/users', async (req, res) => {
    try {
        const response = await createUser(req.body);
        res.status(201).json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error creating user' });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const response = await getUsers();
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error getting users' });
    }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const response = await getUserById(req.params.id);
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error getting user' });
    }
});

// Update user
app.patch('/users/:id', async (req, res) => {
    try {
        const response = await updateUser(req.params.id, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error updating user' });
    }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
    try {
        const response = await deleteUser(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error deleting user' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
