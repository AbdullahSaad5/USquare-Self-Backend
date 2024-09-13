// var express = require('express');
// var router = express.Router();

// var user = require('../controllers/controller.user.js');
// var userModel =require('../models/model.user.js');
// const { updatePassword } = require("../controllers/controller.user.js");

// router.get('/',(req,res)=>
// {
//     res.json({
//         message: "Welcome to User Route"
//     })
// })

// // Signup for User
// router.post('/signup_user', function (req, res) {
//     var userform = req.body;
//     userform.login_type = "normal"
//     user.checkEmail(userform.email, function (err, result) {
//         if (err) {
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         } else {
//             if (result) {
//                 if(userform.login_type == "normal" && userform.email !== ""){
//                     return res.json({
//                         message: "Email Already Exists",
//                         status: false
//                     });
//                 }
//                 else if(userform.login_type == "social"){
//                     return res.json({
//                         message: "User Login successfully",
//                         status: true, 
//                         data: result
//                     });
//                 }
//                 else if(userform.email == ""){
//                     return res.json({
//                         message: "Email is Required",
//                         status: false, 
//                     });
//                 }

//             } else {

//                     if(userform.login_type == "normal"){
//                         user.addUser(userform, function (err, user) {
//                             if (err) {
//                                 if (err.keyValue.mobile_number != null && err.name === "MongoError" && err.code === 11000) {
//                                     console.log("Mobile Number must be unique");
//                                     return res.json({
//                                     message: "Mobile Number already in use",
//                                     status: false
//                                     });
//                                   }
//                                   else {
//                                     return res.json({
//                                     message: "Error in Connecting to DB",
//                                     status: false
//                                     });
//                                   }
//                             }
//                             else if(user)
//                             {   
//                                 return res.json({
//                                     message: "User Registered successful",
//                                     status: true, 
//                                     data: user
//                                 });

//                             }
                            
//                         });
//                     }
//                     else{
//                         user.addUserSocial(userform, function (err, user) {
//                             if (err) {
//                                 if (err.keyValue.mobile_number != null && err.name === "MongoError" && err.code === 11000) {
//                                     console.log("Mobile Number must be unique");
//                                     return res.json({
//                                     message: "Mobile Number already in use",
//                                     status: false
//                                     });
//                                   }
//                                   else {
//                                     return res.json({
//                                     message: "Error in Connecting to DB",
//                                     status: false
//                                     });
//                                   } 
//                             }
//                             else if(user)
//                             {   
//                                 return res.json({
//                                     message: "User Registered successful",
//                                     status: true, 
//                                     data: user
//                                 });
//                             }
                            
//                         });
//                     }

                    
//                 }
//             }
//         });

//     });

    

// //Get All User
// router.get('/get_all_user', function (req, res) {
//     user.getAllUser(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false, 
//                 data: []
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "User List",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No User Exist",
//                 status: false, 
//                 data: result
//             });
//         }
        
//     });

// });  

// //Get All Verified User
// router.get('/get_all_verified_user', function (req, res) {
//     user.getAllVerifiedUser(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false, 
//                 data: []
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "User List",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No User Exist",
//                 status: false, 
//                 data: result
//             });
//         }
        
//     });

// });  

// //Get All Vendor
// router.get('/get_all_vendor', function (req, res) {
//     user.getAllVendor(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false, 
//                 data: []
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "Vendor List",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No Vendor Exist",
//                 status: false, 
//                 data: result
//             });
//         }
        
//     });

// });   


// //Get All Admin
// router.get('/get_all_admin', function (req, res) {
//     user.getAllUserAdmin(function (err, result) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else if(result.length>0){
//             return res.json({
//                 message: "Admin List",
//                 status: true,
//                 data: result
//             });
//         }
//         else{
//             return res.json({ 
//                 message: "No Admin Exist",
//                 status: false
//             });
//         }
        
//     });

// });   


// // Get User By Id
// router.get('/get_by_id/:userId', function (req, res) {
//     var userId = req.params.userId;
//     console.log(userId)
//     user.getUserById(userId, function (err, userResult) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 message: "Error in Connecting to DB",
//                 status: false
//             });
//         }
//         else if(userResult){
//             res.json({status: true, message: 'User Exist', data: userResult})
//         }
//         else{
//             res.json({status: false, message: 'User Do not Exist'})
//         }

//     });

// });


// // // Password Update
// // router.patch('/update_password/:userId', function (req, res) {
// //     var userId = req.params.userId;
// //     var oldPassword = req.body.old_password;
// //     var newPassword = req.body.new_password;

// //     user.passwordUpdateOldRequired(userId, oldPassword, newPassword, res)

// // });



// router.patch("/update_password/:userId", (req, res) => {
//     const { userId } = req.params;
//     const { oldPassword, newPassword } = req.body;
//     controller.passwordUpdateOldRequired(userId, oldPassword, newPassword, res);
// });

// // Update User Profile.
// router.patch('/update_user/:userId', function (req, res) {
//     var userId = req.params.userId;
//     var userform = req.body;
//     console.log(userform);

//     if(userform.email){
//         console.log("email update");
//         user.checkEmailForUpdate(userform.email,userId, function (err, userExist) {
//             if (err) {
//                 return res.status(500).json({
//                     message: "Error in Connecting to DB",
//                     status: false
//                 });
//             }
//             else{
//                 if(userExist && userform.email !== ""){
//                     return res.json({
//                         message: "Email Already Exists",
//                         status: false
//                     });
//                 }
//                 else{
    
//                     user.updateUser(userId, userform, {
//                         new: true
//                     }, function (err, userResult) {
//                         if (err) {
//                             if (err.keyValue.mobile_number != null && err.name === "MongoError" && err.code === 11000) {
//                                 console.log("Mobile Number must be unique");
//                                 return res.json({
//                                 message: "Mobile Number already in use",
//                                 status: false
//                                 });
//                               }
//                               else {
//                                 return res.json({
//                                 message: "Error in Connecting to DB",
//                                 status: false
//                                 });
//                               }
//                         }
//                         return res.json({
//                             status: true,
//                             message: "Profile Updated",
//                             data: userResult
//                         });
                
//                     });
    
//                 }
//             }
    
    
//         });
    
//     }
//     else{
//         console.log("email is not being updated");
//         user.updateUser(userId, userform, {
//             new: true
//         }, function (err, userResult) {
//             if (err) {
//                 if (err.keyValue.mobile_number != null && err.name === "MongoError" && err.code === 11000) {
//                     console.log("Mobile Number must be unique");
//                     return res.json({
//                     message: "Mobile Number already in use",
//                     status: false
//                     });
//                   }
//                   else {
//                     return res.json({
//                     message: "Error in Connecting to DB",
//                     status: false
//                     });
//                   }
//             }
//             return res.json({
//                 status: true,
//                 message: "Profile Updated",
//                 data: userResult
//             });
    
//         });
//     }
    
// });
 



// // Route to update password
// // router.patch("/update_password", updatePassword);


// module.exports = router;


var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller.user.js');

// Welcome route
router.get('/', (req, res) => {
    res.json({ message: "Welcome to User Route" });
});

// Signup for User
router.post('/signup_user', async (req, res) => {
    try {
        const userform = req.body;
        userform.login_type = "normal";
        const result = await userController.checkEmail(userform.email);

        if (result) {
            if (userform.email === "") {
                return res.status(400).json({
                    message: "Email is Required",
                    status: false,
                });
            }
            if (userform.login_type === "normal") {
                return res.status(400).json({
                    message: "Email Already Exists",
                    status: false
                });
            } else if (userform.login_type === "social") {
                return res.status(200).json({
                    message: "User Login successfully",
                    status: true,
                    data: result
                });
            }
        }

        if (userform.login_type === "normal") {
            const user = await userController.addUser(userform);
            return res.status(201).json({
                message: "User Registered successfully",
                status: true,
                data: user
            });
        } else {
            const user = await userController.addUserSocial(userform);
            return res.status(201).json({
                message: "User Registered successfully",
                status: true,
                data: user
            });
        }
    } catch (err) {
        console.error("Error in /signup_user:", err); // Log the error
        if (err.code === 11000) {
            return res.status(400).json({
                message: "Mobile Number already in use",
                status: false
            });
        }
        return res.status(500).json({
            message: "Error in Connecting to DB",
            status: false
        });
    }
});

// Update Password
router.patch("/update_password/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const { oldPassword, newPassword } = req.body;

        const result = await userController.passwordUpdateOldRequired(userId, oldPassword, newPassword);
        return res.json(result);
    } catch (err) {
        console.error("Error in /update_password:", err); // Log the error
        return res.status(500).json({
            message: "Error in Updating Password",
            status: false
        });
    }
});

// Update User Profile
router.patch('/update_user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const userform = req.body;

        if (userform.email) {
            const emailExists = await userController.checkEmailForUpdate(userform.email, userId);
            if (emailExists) {
                return res.status(400).json({
                    message: "Email Already Exists",
                    status: false
                });
            }
        }

        const updatedUser = await userController.updateUser(userId, userform);
        return res.status(200).json({
            status: true,
            message: "Profile Updated",
            data: updatedUser
        });
    } catch (err) {
        console.error("Error in /update_user:", err); // Log the error
        if (err.code === 11000) {
            return res.status(400).json({
                message: "Mobile Number already in use",
                status: false
            });
        }
        return res.status(500).json({
            message: "Error in Connecting to DB",
            status: false
        });
    }
});

module.exports = router;
