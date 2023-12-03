import { userModel } from "../models/index.js";
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '31d'})
}

export const loginUser = async (req, res) => {
	const {email, password} = req.body;

	try {
		const user = await userModel.login(email, password);

		const token = createToken(user._id);
		res.status(201).json({email, token});
	} catch (error) {
		console.log(error);
		res.status(400).json({message: error.message});
	}
}

export const registerUser = async (req, res) => {
	const {fullName, email, tel, password} = req.body;

	try {
		const user = await userModel.register(fullName, email, tel, password)

		const token = createToken(user._id);

		res.status(201).json({fullName, email, tel, token})
	} catch (error) {
		console.log(error);

		res.status(400).json({error: error.message});
	}
}