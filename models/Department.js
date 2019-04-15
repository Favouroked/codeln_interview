const { Schema, model } = require("mongoose");

const DepartmentSchema = new Schema({
  department_id: { type: String, required: true, index: true },
  name: String,
  manager_id: { type: String, required: true, index: true }
});

const Department = new model("Department", DepartmentSchema);

module.exports = Department;
