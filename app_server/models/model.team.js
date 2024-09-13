const mongoose = require("mongoose");

const schema = mongoose.Schema;

// Team Schema
const teamSchema = new schema({
  teamMemberName: {
    type: String,
    required: true,
  },
  teamMemberTitle: {
    type: String,
    required: true,
  },
  teamMemberEmail: {
    type: String,
    required: true,
   
  },
  teamMemberPhone: {
    type: String,
    required: true,
  },

  CNIC: {
    type: String,
    required: true,
  },
  memberPriority: {
    type: String,
    required: true,
  },
  officialEmail: {
    type: String,
   
  },
  officialPhone: {
    type: String,
  },
  teamMemberFacebookLink: {
    type: String,
    default: "facebook.com/",
  },
  teamMemberTwitterLink: {
    type: String,
    default: "twitter.com/",
  },
  teamMemberLinkedInLink: {
    type: String,
    default: "linkedin.com/",
  },
  teamMemberGithubLink: {
    type: String,
    default: "github.com/",
  },
  bankName: {
    type: String,
  },
  bankBranch: {
    type: String,
  },
  bankAccountNumber: {
    type: String,
  },
  IBAN: {
    type: String,
  },

  teamMemberImage: {
    type: String,
  },

  IDCardFront: {
    type: String,
  },
  IDCardBack: {
    type: String,
  },
  NOKName: {
    type: String,
  },
  NOKRelation: {
    type: String,
  },
  NOKContact: {
    type: String,
  },
  NOKAddress: {
    type: String,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  date_time: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
