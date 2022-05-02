const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const identificationRoutes = require('./routes/identification');
const secteurInterventionRoutes = require('./routes/secteur_intervention');
const prestataireRoutes = require('./routes/prestataire');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/identification', identificationRoutes)
app.use('/api/secteur_intervention', secteurInterventionRoutes)
app.use('/api/prestataire', prestataireRoutes)

connectDB();


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`listening on port ${port}`));