const Service = require("../models/model.service");
const Job = require("../models/model.job");
const Testimonial = require("../models/model.testimonial");
const Project = require("../models/model.project");
const Product = require("../models/model.product");
const Team = require("../models/model.team");
const Blog = require("../models/model.blog");
// Import other models as needed

const getDashboardData = async (req, res) => {
  try {
    // Get the count of services
    const serviceCount = await Service.countDocuments();

    // Get the count of jobs
    const jobCount = await Job.countDocuments();

    // Get the count of testimonials
    const testimonialCount = await Testimonial.countDocuments();

    const projectsCount = await Project.countDocuments();
    const productsCount = await Product.countDocuments();
    // const jobApplicationsCount = await jobApplications.countDocuments();
    const teamMembersCount = await Team.countDocuments();
    const blogsCount = await Blog.countDocuments();
    // Repeat similar logic for other models (projects, products, etc.)

    res.status(200).json({
      data: [
        { label: "Services", value: serviceCount },
        { label: "Jobs", value: jobCount },
        { label: "Testimonials", value: testimonialCount },
        { label: "Projects", value: projectsCount },
        { label: "Products", value: productsCount },
        // { label: "Job Applications", value: jobApplicationsCount },
        { label: "Team Members", value: teamMembersCount },
        { label: "Blogs", value: blogsCount },
        // Add other data here
      ],
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dashboard data" });
  }
};

module.exports = {
  getDashboardData,
};
