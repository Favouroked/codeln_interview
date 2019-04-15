const { Schema, model } = require("mongoose");

const EmployeeSchema = new Schema({
  employee_id: { type: String, required: true, index: true },
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  middle_initial: String,
  sex: String,
  address: String,
  city: String,
  region: String,
  postal_code: String,
  office_phone: String,
  office_location: String,
  manager_id: { type: String, index: true },
  vacation_hours: String,
  sick_leave_hours: String
});

const Employee = new model("Employee", EmployeeSchema);
module.exports = Employee;
