const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  return members.map((member) => (typeof member === 'string' ? member.trim().substr(0, 1).toUpperCase() : '')).sort().join('');
};

