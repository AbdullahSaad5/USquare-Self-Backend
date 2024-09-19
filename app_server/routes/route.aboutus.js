var express = require('express');
var router = express.Router();

var aboutUsController = require('../controllers/controller.aboutUs.js');

// Get All AboutUs data
router.get('/get_all', function (req, res) {
    aboutUsController.getAllAboutUs(function (err, result) {
        if (err) {
            console.log(err);
            return res.json({
                message: 'Error in Connecting to DB',
                status: false,
            });
        } else if (result.length > 0) {
            return res.json({
                message: 'About Us Data Exists',
                status: true,
                data: result,
            });
        } else {
            return res.json({
                message: 'No Data Exists',
                status: false,
                data: result,
            });
        }
    });
});
router.patch('/update', function (req, res) {
    const aboutUsData = req.body;
    const query = { _id: aboutUsData._id }; // Make sure you have an identifier
    aboutUsController.updateAboutUs(query, aboutUsData, function (err, result) {
        if (err) {
            console.error('Error in Updating Data:', err);
            return res.status(500).json({
                message: 'Error in Updating Data',
                status: false,
            });
        } else {
            return res.json({
                message: 'About Us Data Updated Successfully',
                status: true,
                data: result,
            });
        }
    });
});


// Add New AboutUs data
router.post('/add', function (req, res) {
    const aboutUsData = req.body;
    aboutUsController.addAboutUs(aboutUsData, function (err, result) {
        if (err) {
            console.log(err);
            return res.json({
                message: 'Error in Adding Data',
                status: false,
            });
        } else {
            return res.json({
                message: 'About Us Data Added Successfully',
                status: true,
                data: result,
            });
        }
    });
});

module.exports = router;




