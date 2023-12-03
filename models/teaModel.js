import mongoose from "mongoose";

const teaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	mixtureImage: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true
	},
	ratingList: {
		type: Array,
		default: [],
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
	discount: {
		type: Boolean,
		default: false,
	},
	price: {
		type: Array,
		required: true,
	},
}, {timestamps: true});

export default mongoose.model('Tea', teaSchema);