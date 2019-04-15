const { Schema, model } = require("mongoose");

const TitleSchema = new Schema({
  title_id: { type: String, required: true, index: true },
  title: String,
  level: String,
  job_description: String,
  low_pay: String,
  high_pay: String
});

const Title = new model("Title", TitleSchema);

module.exports = Title;