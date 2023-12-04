import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userShema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		uniuqe: true,
	},
	tel: {
		type: String,
		required: true,
		uniuqe: true,
	},
	password: {
		type: String,
		required: true,
	},
	userCart: {
		type: Array,
		default: [],
	}
}, {timestamps: true});

userShema.statics.login = async function(email, password) {
	
	if(!email || !password) {
		throw Error('Всі поля повинні бути заповнені!');
	}

	const user = await this.findOne({email});

	if(!user) {
		throw Error('Неправильна почта або пароль');
	}

	const match = await bcrypt.compare(password, user.password);

	if(!match) {
		throw Error('Неправильна почта або пароль');
	}

	return user
}

userShema.statics.register = async function(fullName, email, tel, password) {

	if (!fullName || !email || !tel || !password) {
		throw Error('Всі поля повинні бути заповнені!');
	}

	if (!validator.isEmail(email)) {
		throw Error('Неправильна електронна почта.');
	}

	if(!validator.isMobilePhone(tel, ['uk-UA'])) {
		throw Error('Неправильний номер телефону');
	}

	if(password.length < 8) {
		throw Error('Пароль занадто простий')
	}

	const checkEmail = await this.findOne({ email });
	const checkTel = await this.findOne({ tel });

	if(checkEmail) {
		throw Error('Данна електрона пошта уже використовується');
	}

	if(checkTel) {
		throw Error('Данний номер телефону уже використовується');
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({fullName, email, tel, password: hash});

	return user;
}

userShema.statics.login = async function(email, password) {

	if (!email || !password) {
		throw Error('Всі поля повинні бути заповнені!');
	}

	const user = await this.findOne({email});

	if(!user) {
		throw Error('Неправильна електронна почта');
	}

	const match = await bcrypt.compare(password, user.password);

	if(!match) {
		throw Error('Неправильна почта або пароль');
	}

	return user
}

export default mongoose.model('User', userShema);