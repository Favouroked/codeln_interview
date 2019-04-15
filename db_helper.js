const mongoose = require("mongoose");
const faker = require("faker");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/interview");

const Employee = require("./models/Employee");
const JobHistory = require("./models/JobHistory");
const Title = require("./models/Title");
const Department = require("./models/Department");

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateEmployees = async num => {
  for (let i = 0; i < num; i++) {
    await new Employee({
      employee_id: i + 1,
      last_name: faker.name.lastName(),
      first_name: faker.name.firstName(),
      middle_initial: faker.name.suffix(),
      sex: (i + 1) % 2 === 0 ? "Male" : "Female",
      address: faker.address.secondaryAddress(),
      city: faker.address.city(),
      region: faker.address.country(),
      postal_code: faker.address.zipCode(),
      office_phone: faker.phone.phoneNumber(),
      office_location: faker.phone.phoneNumber(),
      manager_id: generateRandom(1, 5),
      vacation_hours: faker.random.number(),
      sick_leave_hours: faker.random.number()
    }).save();
  }
};

const generateJobHistory = async num => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < 3; j++) {
      await new JobHistory({
        employee_id: i + 1,
        date: faker.date.past(),
        title_id: generateRandom(1, 6),
        department_id: generateRandom(1, 10),
        pay: generateRandom(1000, 5000)
      }).save();
    }
  }
};

const generateTitles = async num => {
  for (let i = 0; i < num; i++) {
    await new Title({
      title_id: i + 1,
      title: faker.name.jobTitle(),
      level: generateRandom(1, 10),
      job_description: faker.name.jobDescriptor(),
      low_pay: generateRandom(1000, 3000),
      high_pay: generateRandom(3001, 5000)
    }).save();
  }
};

const generateDepartments = async num => {
  for (let i = 0; i < num; i++) {
    await new Department({
      department_id: i + 1,
      name: faker.name.findName(),
      manager_id: generateRandom(1, 5)
    }).save();
  }
};

generateEmployees(5);
generateJobHistory(5);
generateTitles(6);
generateDepartments(10);
