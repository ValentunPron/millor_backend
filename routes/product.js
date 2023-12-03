import express from 'express';
import { getCoffe, getEating, getTea, getVending } from '../controllers/productController.js';

const router = express.Router();

router.get('/coffe', getCoffe);
router.get('/tea', getTea);
router.get('/vending', getVending);
router.get('/eating', getEating);

export default router;