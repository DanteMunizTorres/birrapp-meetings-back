const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');


//capturar informacion de los formularios--
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(express.json())

//habilitar metodos http-------------------
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//cors-------------------------------------
app.use(cors())





//RUTAS
const userRoutes = require('./src/routes/userRoutes.js')
const meetingRoutes = require('./src/routes/meetingRoutes.js')

app.use('/user', userRoutes)
app.use('/meeting', meetingRoutes)


const PORT = 5000
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})