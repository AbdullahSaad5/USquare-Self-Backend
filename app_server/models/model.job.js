const mongoose = require("mongoose");

const schema = mongoose.Schema;

const JobSchema = new schema({
  jobApplicationDeadline: { type: Date, required: true }, 
  title: { type: String, trim: true, required: true },
  type: {
    type: String,
    enum: ["Full Time", "Part Time", "Remote"], 
    required: true,
  },
  jobCategory: {
    type: mongoose.Schema.Types.ObjectId, // Reference to JobCategory
    ref: 'Category', // Refers to the JobCategory model
    required: true,
  },
  vacancies: { type: Number, required: true },
  jobLevel: { type: String, trim: true, required: true },
  minimumQualifications: { type: String, trim: true, required: true },
  minimumExperience: {
    type: String,
    enum: [
      "0-1 Year",
      "1-3 Years",
      "3-5 Years",
      "5-7 Years",
      "7-10 Years",
      "10+ Years",
    ],
    required: true,
  },
  minimumJobSalary: { type: Number, required: true },
  maximumJobSalary: { type: Number, required: true },
  jobRequirements: { type: String, trim: true, required: true },
  jobResponsibilities: { type: String, trim: true },
  description: { type: String, trim: true, required: true },
  otherBenefits: { type: String, trim: true },
  jobSkills: { type: String, trim: true },
  state: { type: String, default: "active" },
  blocked: { type: Boolean, default: false },
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
