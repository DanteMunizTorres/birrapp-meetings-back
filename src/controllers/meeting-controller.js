let fs = require('fs')
const path = require("path");

/* const { validationResult } = require('express-validator')
const Sequelize = require('sequelize')
const Op = Sequelize.Op */

//listado de meetings en formato JSON
let meetingsListPath = path.join(__dirname, '../data/meetings.js')
let meetingsListJSON = fs.readFileSync(meetingsListPath, { encoding: 'utf-8' });
let meetingsList = JSON.parse(meetingsListJSON);




const controller = {

  searchMeeting: (req,res) => {
    res.json(meetingsList)
  },
  createMeeting: (req, res) => {
    
    console.log('req.body', req.body);

    let newId = meetingsList.length + 1;
    let newMeeting = {
      ...req.body, 
      id: newId
    }
    console.log('NEW MEETING ---------------',newMeeting);
    meetingsList.push(newMeeting);
    let newMeetingsList = JSON.stringify(meetingsList);
    fs.writeFile(
      meetingsListPath, 
      JSON.stringify(JSON.parse(newMeetingsList),null,2), 
      (err)=>{ 
        err? console.log('there was an error when saving file', err)
        : console.log('Info was saved!') 
      }
    )
    /* res.redirect('http://localhost:3000/') */
  },
  attendMeeting: (req,res) => {
    let id = req.params.id;
    meetingsList = meetingsList.map(meeting => {
      if(meeting.id == id) {
        return {
          ...meeting, 
          peopleChecked: [...peopleChecked, req.body.checkInUser]
        }
      } else {
        return product
      }
    })
    
    let newMeetingsList = JSON.stringify(meetingsList);
    fs.writeFileSync(meetingsListPath, newMeetingsList)
    res.redirect(`/product/detail/${id}`)
  },
  delete: (req,res) => {
    let id = req.params.id;
    meetingsList = meetingsList.filter(meeting => meeting.id != id)

    let newMeetingsList = JSON.stringify(meetingsList);
    fs.writeFileSync(meetingsListPath, newMeetingsList)
    res.redirect('/product/list')
  }
}

module.exports = controller