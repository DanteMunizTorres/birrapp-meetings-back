const express = require('express');
const router = express.Router();


//configuracion de validaciones del formulario de registro de usuario
/* const validationUserForm = require('../middlewares/user-validations') */

/* 
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware') */



//controllers
const meetingController = require('../controllers/meeting-controller');


//registrar meeting
router.post('/create', /* validationUserForm, */ meetingController.createMeeting)

//traer meetings
router.get('/search/', meetingController.searchMeeting);

//editar informacion de asistentes
router.put('/:id/edit', /* validationUserForm, */ meetingController.attendMeeting )



module.exports = router;