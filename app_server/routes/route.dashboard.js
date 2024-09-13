const express = require("express");
const { getDashboardData, createDashboardItem } = require("../controllers/controller.dashboard");

const router = express.Router();

// Route to get all dashboard data
router.get("/", getDashboardData);

// Route to create a new dashboard item (optional, based on your needs)
// router.post("/", createDashboardItem);

module.exports = router;
