// var express = require('express');
// var router = express.Router();

var team = require('../controllers/controller.team.js');
// const mediaUpload = require("../../config/media_upload");

// //Add team
// router.post('/add',mediaUpload.fields([
//     {
//       name: 'picture', maxCount: 1
//     }
//   ]),function (req, res) {
//     var teamForm = req.body;
//     console.log(teamForm)
//     if(req.files && req.files.picture){
//         teamForm.picture = req.files.picture[0].location;
//     }

//     team.addTeam(teamForm  ,function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else{
//             return res.json({
//                 message: "team member added successfully",
//                 status: true, 
//                 data: result
//             });
//         }

//     });

// });


// //Get All team member list
// router.get('/get_all', function (req, res) {
//     team.getAllTeams(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "team member list exist",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No team member exist",
//                 status: false,
//                 data: result
//             });
//         }
        
//     });

// });

// //Get All team form list
// router.get('/get_top', function (req, res) {
//     team.getTop3Teams(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DDB",
//                 status: false
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "team member Exist",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No team member Exist",
//                 status: false,
//                 data: results
//             });
//         }
        
//     });

// });


// //Get All team form list
// router.get('/getSingle/:teamId', function (req, res) {
//     team.getTeamById(req.params.teamId ,function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "team member Exist",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No team member Exist",
//                 status: false,
//                 data: result
//             });
//         }
        
//     });

// });


// //Update team form
// router.patch('/update/:teamId', mediaUpload.fields([
//     {
//       name: 'picture', maxCount: 1
//     }
//   ]),function (req, res) {
//     var teamForm = req.body;
//     var teamId = req.params.teamId;
//     console.log(teamForm)
//     if(req.files && req.files.picture){
//         teamForm.picture = req.files.picture[0].location;
//     }

//     team.updateTeam(teamId, teamForm, {new: true}, function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else{
//             return res.json({
//                 message: "team form updated successfully",
//                 status: true, 
//                 data: result
//             });
//         }

//     });

// });

// // Remove team By Id
// router.get('/delete/:teamId', function (req, res) {
//     team.removeByid(req.params.teamId, function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else if(result){
//             return res.json({
//                 message: "team member removed",
//                 status: true,
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "team member not removed",
//                 status: false
//             });
//         }
        
//     });

// });

// router.put('/block/:id', teamController.blockTeam);
// module.exports = router;





var express = require('express');
var router = express.Router();

// var Team = require('../controllers/controller.team.js'); // Ensure correct import
// var Team =require("../controllers/controller.team")
var Team =require("../models/model.team");
const mediaUpload = require("../../config/media_upload");

// router.post('/add', async (req, res) => {
//     try {
//       // Logging the request body to check incoming data
//       console.log('Request body:', req.body);
  
//       const {
//         teamMemberName, teamMemberTitle, teamMemberEmail, teamMemberPhone, CNIC, memberPriority,
//         officialEmail, officialPhone,
//         teamMemberFacebookLink, teamMemberTwitterLink,
//         teamMemberLinkedInLink, teamMemberGithubLink,
//         bankName, bankBranch, bankAccountNumber, IBAN,
//         IDCardFront, IDCardBack,
//         NOKName, NOKRelation, NOKContact, NOKAddress,
//         teamMemberImage
//       } = req.body;
  
//       // Check for missing required fields
//       if (!teamMemberName || !teamMemberTitle || !teamMemberEmail || !teamMemberPhone || !CNIC || !memberPriority) {
//         return res.status(400).json({ message: 'All required fields must be provided' });
//       }
  
//       // Create a new Team document
//       const newMember = new team({
//         teamMemberName, teamMemberTitle, teamMemberEmail, teamMemberPhone, CNIC, memberPriority,
//         officialEmail, officialPhone,
//         teamMemberFacebookLink, teamMemberTwitterLink,
//         teamMemberLinkedInLink, teamMemberGithubLink,
//         bankName, bankBranch, bankAccountNumber, IBAN,
//         IDCardFront, IDCardBack,
//         NOKName, NOKRelation, NOKContact, NOKAddress,
//         teamMemberImage
//       });
  
//       // Save the new Team member to the database
//       await newMember.save();
//       res.status(201).json({ success: true, message: 'Team member added successfully' });
//     } catch (error) {
//       console.error('Error adding team member:', error);
//       res.status(500).json({ message: 'Internal Server Error', error });
//     }
//   });
  
// Get All team member list





router.post('/add', async (req, res) => {
    try {
      const {
        teamMemberName, teamMemberTitle, teamMemberEmail,
        teamMemberPhone, CNIC, memberPriority, teamMemberImage
      } = req.body;
  
      // Validate required fields
      if (!teamMemberName || !teamMemberTitle || !teamMemberEmail || !teamMemberPhone || !CNIC || !memberPriority) {
        return res.status(400).json({ message: 'All required fields must be provided' });
      }
  
      // Email format validation (basic)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(teamMemberEmail)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
  
      // Create new team member
      const newMember = new Team({
        teamMemberName,
        teamMemberTitle,
        teamMemberEmail,
        teamMemberPhone,
        CNIC,
        memberPriority,
        teamMemberImage
      });
  
      // Save to database
      await newMember.save();
      res.status(201).json({ success: true, message: 'Team member added successfully' });
      
    } catch (error) {
      console.error('Error adding team member:', error);
  
      // Handle specific MongoDB duplicate key error (email duplication)
      if (error.code === 11000) {
        return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
      }
  
      // Generic error handler
      res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
  });
  




router.get('/get_all', function (req, res) {
    team.getAllTeams(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        if (result.length > 0) {
            return res.status(200).json({
                message: "Team member list exists",
                status: true,
                data: result
            });
        }
        return res.status(404).json({ 
            message: "No team members exist",
            status: false,
            data: result
        });
    });
});

// Get Top 3 team members
router.get('/get_top', function (req, res) {
    team.getTop3Teams(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        if (result.length > 0) {
            return res.status(200).json({
                message: "Top team members exist",
                status: true,
                data: result
            });
        }
        return res.status(404).json({ 
            message: "No top team members exist",
            status: false,
            data: result
        });
    });
});

// Get Single team member
router.get('/getSingle/:teamId', function (req, res) {
    team.getTeamById(req.params.teamId, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        if (result) {
            return res.status(200).json({
                message: "Team member exists",
                status: true,
                data: result
            });
        }
        return res.status(404).json({ 
            message: "No team member found",
            status: false,
            data: result
        });
    });
});

// Update team member
router.put('/update/:teamId', mediaUpload.fields([
    { name: 'picture', maxCount: 1 }
]), function (req, res) {
    var teamForm = req.body;
    var teamId = req.params.teamId;
    if (req.files && req.files.picture) {
        teamForm.picture = req.files.picture[0].location;
    }

    team.updateTeam(teamId, teamForm, { new: true }, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        return res.status(200).json({
            message: "Team member updated successfully",
            status: true, 
            data: result
        });
    });
});

// Remove team member by ID
router.delete('/delete/:teamId', function (req, res) {
    team.removeByid(req.params.teamId, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        if (result) {
            return res.status(200).json({
                message: "Team member removed",
                status: true
            });
        }
        return res.status(404).json({ 
            message: "Team member not found",
            status: false
        });
    });
});

// Block team member
router.put('/block/:id', team.blockTeam); // Make sure 'team.blockTeam' is correct

module.exports = router;
