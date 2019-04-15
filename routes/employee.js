const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

router.get('/', (req, res) => {
    Employee.find({}, (err, empl) => {
        if (err) {
            res.status(500).json({message: "An error occurred"});
        } else {
            res.status(200).json(empl);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Employee.findOne({ employee_id: id }, (err, empl) => {
        if (err) {
            res.status(500).json({message: "An error occurred"});
        } else {
            res.status(200).json(empl);
        }
    });
});

module.exports = router