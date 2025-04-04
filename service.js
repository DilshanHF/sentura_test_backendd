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
    return await weavy.post('users/createuser/', data);
};

// GET all users
const getUsers = async () => {
    return await weavy.get('users/getAllUser/');
};

// GET user by ID
const getUserById = async (id) => {
    return await weavy.get(`users/getUserId/${id}`);
};

// UPDATE user
const updateUser = async (id, data) => {
    return await weavy.patch(`users/updateUser/${id}`, data);
};

// DELETE user
const deleteUser = async (id) => {
    return await weavy.delete(`users/deleteUser/${id}`);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
