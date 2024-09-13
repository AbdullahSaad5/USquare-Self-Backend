var express = require("express");
var router = express.Router();

var jobController = require("../controllers/controller.job.js");

// Get All Jobs Data
router.get("/get_all", function (req, res) {
  jobController.getAllJobs(function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error in Connecting to DB",
        status: false,
      });
    } else if (result.length > 0) {
      return res.status(200).json({
        message: "Jobs Data Exists",
        status: true,
        data: result,
      });
    } else {
      return res.status(404).json({
        message: "No Data Exists",
        status: false,
        data: result,
      });
    }
  });
});

// Update Job Data
router.put("/update/:id", function (req, res) {
  const jobId = req.params.id;
  const jobData = req.body;

  // Ensure the query uses the correct job ID
  const query = { _id: jobId };

  jobController.updateJobs(query, jobData, function (err, result) {  // Updated to `updateJobs`
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error in Updating Data",
        status: false,
      });
    } else if (result) {
      return res.status(200).json({
        message: "Job Data Updated Successfully",
        status: true,
        data: result,
      });
    } else {
      return res.status(404).json({
        message: "Job Not Found",
        status: false,
      });
    }
  });
});

// Add New Job Data
router.post("/add", function (req, res) {
  const jobData = req.body;
  jobController.addJobs(jobData, function (err, result) {  // Updated to `addJobs`
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error in Adding Data",
        status: false,
      });
    } else {
      return res.status(201).json({
        message: "Job Data Added Successfully",
        status: true,
        data: result,
      });
    }
  });
});
//block job by id
router.put('/block/:id', jobController.blockJob)


//delete job by id
router.delete('/delete/:id', jobController.deleteJob)

module.exports = router;
