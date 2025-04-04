const axios = require("axios");
require("dotenv").config();

const api = axios.create({
    baseURL: process.env.WEAVY_API,
    headers: {
        Authorization: `Bearer ${process.env.WEAVY_TOKEN}`,
        "Content-Type": "application/json",
    },
});

module.exports = {
    createUser: (data) => api.post("/users", data),
    listUsers: () => api.get("/users"),
    getUser: (id) => api.get(`/users/${id}`),
    updateUser: (id, data) => api.put(`/users/${id}`, data),
    deleteUser: (id) => api.delete(`/users/${id}`),
};
