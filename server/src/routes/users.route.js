import express from 'express';
import { getUsers, createUser } from '../controllers/users.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/register', createUser);

export default router;