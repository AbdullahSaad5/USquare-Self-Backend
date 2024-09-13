
// // Get User By ID
// module.exports.getUserById = (userId, callback) => {
// 	user.findOne({_id: userId}, callback);
// }

// // Get All Users 
// module.exports.getAllUser = (callback) => {
// 	user.find({state: { $ne: 'deleted' }, user_type:"user"}, callback);
// }

// // Get All Verified Users 
// module.exports.getAllVerifiedUser = (callback) => {
// 	user.find({state: "verified", user_type:"user"}, callback);
// }

// // Get All Vendor
// module.exports.getAllVendor = (callback) => {
// 	user.find({state: { $ne: 'deleted' }, user_type:"vendor"}, callback);
// }

// // Get All Admin
// module.exports.getAllUserAdmin = (callback) => {
// 	user.find({state: { $ne: 'deleted' }, user_type:"admin"}, callback);
// }

// // Get User By ID async / await
// module.exports.getUserByIdAsyncAwait = (userId, callback) => {
// 	return user.findOne({_id: userId}, callback).exec();
// }
var User = require('../models/model.user.js');

// Add User
module.exports.addUser = async (userform) => {
    userform.password = hashPassword(userform.password);
    userform.email = userform.email.toLowerCase().trim();
    if (userform.user_type === 'vendor') {
        userform.state = 'pending';
    }
    return User.create(userform);
};

// Add Social User
module.exports.addUserSocial = async (userform) => {
    userform.password = hashPassword("9753845");
    userform.email = userform.email.toLowerCase().trim();
    if (userform.user_type === 'vendor') {
        userform.state = 'pending';
    }
    return User.create(userform);
};

// Check Email exists
module.exports.checkEmail = async (email) => {
    return User.findOne({ email: email.toLowerCase().trim() });
};

// Check Email for Update
module.exports.checkEmailForUpdate = async (email, userId) => {
    return User.findOne({ email: { $regex: `^${email}$`, $options: 'i' }, _id: { $ne: userId } });
};

// Update User
module.exports.updateUser = async (userId, userform) => {
    if (userform.password) {
        userform.password = hashPassword(userform.password);
    }
    return User.findByIdAndUpdate(userId, userform, { new: true });
};

// Password Update with old password verification
module.exports.passwordUpdateOldRequired = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId);
    if (!user) {
        return { message: "User not found", status: false };
    }

    const isMatch = comparePassword(oldPassword, user.password);
    if (!isMatch) {
        return { message: "Old Password is not correct", status: false };
    }

    user.password = hashPassword(newPassword);
    await user.save();
    return { message: "Password Updated Successfully", status: true };
};

// Utility functions for hashing and comparing passwords
function hashPassword(password) {
    const bcrypt = require('bcrypt');
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function comparePassword(inputPassword, storedPassword) {
    const bcrypt = require('bcrypt');
    return bcrypt.compareSync(inputPassword, storedPassword);
}
