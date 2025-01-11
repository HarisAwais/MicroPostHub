const express = require('express');
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require('../controller/user.controller');
const userRouter = express.Router();


userRouter.get('/getall', getAllUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/create', createUser);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
