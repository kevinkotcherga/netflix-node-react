const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successfull'))
	.catch(err => {
		console.error(err);
	});

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 8800, () => {
	console.log('Backend server is running!');
});
