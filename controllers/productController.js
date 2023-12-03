import { coffeModel, eatingModel, teaModel, vendingModel } from "../models/index.js";

export const getCoffe = async (req, res) => {

	const coffe = await coffeModel.find();

	try {
		res.status(200).json({coffe});
	} catch (error) {
		console.log(error);
		res.status(400).json({error: error.message});
	}
}

export const getTea = async (req, res) => {

	const tea = await teaModel.find();

	try {
		res.status(200).json({tea});
	} catch (error) {
		console.log(error);
		res.status(400).json({error: error.message});
	}
}

export const getVending = async (req, res) => {

	const vending = await vendingModel.find();

	try {
		res.status(200).json({vending});
	} catch (error) {
		console.log(error);
		res.status(400).json({error: error.message});
	}
}

export const getEating = async (req, res) => {

	const eating = await eatingModel.find();

	try {
		res.status(200).json({eating});
	} catch (error) {
		console.log(error);
		res.status(400).json({error: error.message});
	}
}

