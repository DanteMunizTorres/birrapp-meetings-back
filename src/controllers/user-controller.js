let fs = require('fs')
const path = require("path");

let usersListPath = path.join(__dirname, '../data/users.js')
let usersListJSON = fs.readFileSync(usersListPath, { encoding: 'utf-8' });
let usersList = JSON.parse(usersListJSON);

const controller = {
  showUsersList: (req,res) => {
    res.json(usersList)
  },
  login: () => {

  },
  logout: () => {

  },
  attendMeeting: () => {

  },
}

module.exports = controller