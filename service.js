require('dotenv').config();
const axios = require('axios');

const weavy = axios.create({
    baseURL: process.env.WEAVY_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.WEAVY_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

// CREATE user
const createUser = async (data) => {
    return await weavy.post('users', data);
};

// GET all users
const getUsers = async () => {
    return await weavy.get('users');
};

// GET user by ID
const getUserById = async (id) => {
    return await weavy.get(`users/${id}`);
};

// UPDATE user
const updateUser = async (id, data) => {
    return await weavy.patch(`users/${id}`, data);
};

// DELETE user
const deleteUser = async (id) => {
    return await weavy.delete(`users/${id}`);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
