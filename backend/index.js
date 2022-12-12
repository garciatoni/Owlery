const express = require('express');
require('dotenv').config();
const {dbConection} = require('./db/config')
const app = express();
const cors = require('cors');

//Data Base
dbConection();

//CORS
app.use(cors())

//Directorio publico
app.use( express.static( 'public' ) );

//Lectura parseo del body
app.use( express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen( process.env.PORT, () => { 
    console.log(' servidor corriendo en 4000');
});

