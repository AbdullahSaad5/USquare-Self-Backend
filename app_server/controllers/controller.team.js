var Team = require('../models/model.team.js'); // Ensure you import the correct model




module.exports.getAllTeams = async (callback) => {
	try {
	  const teams = await Team.find({ state: { $ne: 'deleted' } }).sort({ date_time: -1 });
	  callback(null, teams);
	} catch (error) {
	  callback(error, null);
	}
  };

// Get Top 3 Recent
module.exports.getTop3Teams = (callback) => {
    Team.find({state: { $ne: 'deleted' }}, callback)
        .sort({date_time: -1})
        .limit(3);
};

// Get team by id
module.exports.getTeamById = (id, callback) => {
    Team.find({_id: id, state: { $ne: 'deleted' }}, callback);
};

// Add team
module.exports.addTeam = async (teamForm, callback) => {
    Team.create(teamForm, callback);
};

// Update team
module.exports.updateTeam = async (teamId, teamForm, options, callback) => {
    var query = {_id: teamId};
    Team.findOneAndUpdate(query, teamForm, options, callback);
};

// Delete team
module.exports.removeByid = (id, callback) => {
    var query = {_id: id};
    team.remove(query, callback);
};

// Block or unblock a team 
// module.exports.blockTeam = async (req, res) => {
//     console.log('Block team endpoint hit'); // Check if this is printed in your server console
//     try {
//         const teamId = req.params.id;
//         const team = await team.findById(teamId);

//         if (!team) {
//             console.log('Team not found');
//             return res.status(404).json({ message: 'Team not found' });
//         }

//         team.blocked = !team.blocked; // Toggle the blocked status
//         await team.save();

//         res.status(200).json({ success: true, message: `Team ${team.blocked ? 'blocked' : 'unblocked'} successfully` });
//     } catch (error) {
//         console.error('Error updating team status:', error);
//         res.status(500).json({ success: false, message: 'Error updating team status', error });
//     }
// };





module.exports.blockTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    team.blocked = !team.blocked;
    await team.save();
    res.status(200).json({ success: true, message: `Team ${team.blocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    res.status(500).json({ success: false, message: `Error updating team status: ${error.message}` });
  }
};
