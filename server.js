import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.listen(process.env.PORT, () => {
	console.log('DB ok. PORT:', process.env.PORT)
})