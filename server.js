import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

import { productRoutes, userRoutes } from './routes/index.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use('/api/product', productRoutes);
app.use('/api/user/', userRoutes);

mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('DB ok. PORT:', process.env.PORT)
		})
	})
	.catch((error) => {
		console.log(error)
	})