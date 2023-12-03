import mongoose from "mongoose";

const coffeShema = new mongoose.Schema({
	special: {
		type: Array,
		required: true,
	},
	poputInfo: {
		poputActive: {
			type: Number,
			required: true,
		},
		poputSizes: {
			type: Array,
			required: true
		},
		poputMass: {
			type: String,
			required: true,
		}
	},
	image: {
		type: String,
		required: true,
	},
	mixtureImage: {
		type: String,
		required: true
	},
	ratingList: {
		type: Array,
		default: [],
	},
	roasting: {
		type: Number,
		required: true,
	},
	acid: {
		type: Number,
		required: true,
	},
	bitter: {
		type: Number,
		required: true,
	},
	saturation: {
		type: Number,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	processing: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	price: {
		type: Array,
		required: true,
	}
}, {timestamps: true});

export default mongoose.model('Coffe', coffeShema);