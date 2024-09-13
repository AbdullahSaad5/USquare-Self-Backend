
const Job = require("../models/model.job.js");

// Get All Jobs
module.exports.getAllJobs = (callback) => {
  // Job.find({ state: { $ne: "deleted" } }, callback)
  Job.find({ state: { $ne: "deleted" } }).populate('jobCategory').then((data)=> callback(null, data)).
  catch(err=> callback(err, null))
};

// Update Jobs
module.exports.updateJobs = async (query, JobForm, callback) => {
  const options = { new: true };
  Job.findOneAndUpdate(query, JobForm, options, callback);
};

// Add New Job
module.exports.addJobs = (JobData, callback) => {
  const newJob = new Job(JobData);
  newJob.save(callback);
};





// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Block or unblock a job
exports.blockJob = async (req, res) => {
  console.log('Block Job endpoint hit'); // Check if this is printed in your server console
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      console.log('Job not found');
      return res.status(404).json({ message: 'Job not found' });
    }

    job.blocked = !job.blocked; // Toggle the blocked status
    await job.save();

    res.status(200).json({ success: true, message: `Job ${job.blocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    console.error('Error updating job status:', error);
    res.status(500).json({ success: false, message: 'Error updating job status', error });
  }
};
