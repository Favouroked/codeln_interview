const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/interview", { useNewUrlParser: true });

const app = express()

const employeeRouter = require('./routes/employee');

app.use('/employee', employeeRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Unknown Route"});
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});