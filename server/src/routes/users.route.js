import express from 'express';
import { login, createUser, logout } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/user/login', login);
router.post('/user/logout', logout);
router.post('/user/register', createUser);

export default router;