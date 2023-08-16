import express from 'express';
import { signUp, logIn } from '../controllers/authController.mjs';

const authRoutes = express.Router();

authRoutes.post('/signUp', signUp);
authRoutes.post('/logIn', logIn);

export default authRoutes;