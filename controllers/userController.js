import { userModel } from "../models/index.js";
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '31d'})
}

export const loginUser = async (req, res) => {
	const {email, password} = req.body;

	try {
		const user = await userModel.login(email, password);
		const fullName = user.fullName;

		const token = createToken(user._id);
		res.status(201).json({fullName, email, token});
	} catch (error) {
		console.log(error);
		res.status(400).json({error: error.message});
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

export const authMeUser = async (req, res) => {
	try {
		const user = await userModel.findById(req.user._id);

		if (!user) {
			return res.status(404).json({
				message: 'Користувача не найдено'
			});
		}

		const {fullName, email} = user;

		res.status(201).json({fullName, email});
	} catch (error) {
		console.log(error)
		res.status(400).json({error: error.message});
	}
}