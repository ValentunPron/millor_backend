import express from 'express';
import { authMeUser, loginUser, registerUser } from '../controllers/userController.js';
import { requireAuth } from '../middleware/requireAuth.js'

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/authMe', requireAuth, authMeUser)

export default router;