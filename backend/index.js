const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');
const dotenv=require("dotenv")
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

// const formDataSchema = new mongoose.Schema({
//     name: String,
//     phoneNumber: String,
//     age: Number,
//     startTime: Date,
//     endTime: Date,
// });

// const FormDataModel = mongoose.model('FormData', formDataSchema);

app.post('/login', (req, res) => {
    const { name, phoneNumber, age } = req.body;
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);
    FormDataModel.create({ name, phoneNumber, age, startTime, endTime })
        .then(log_reg_form => res.json(log_reg_form))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
