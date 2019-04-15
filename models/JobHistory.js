const { Schema, model } = require("mongoose");

const JobHistorySchema = new Schema({
  employee_id: { type: String, required: true, index: true },
  date: Date,
  title_id: String,
  department_id: String,
  pay: String
});

const JobHistory = new model("JobHistory", JobHistorySchema);

module.exports = JobHistory;
