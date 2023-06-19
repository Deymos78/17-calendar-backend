
// Almacenas en una constante la importacion del paquete de express para poder acceder a sus metodos
// Esta es la forma en la que trabaja express, en javascript es con la paralabra 'import'
const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const { dbConnection } =  require('./database/config')  

// console.log( process.env );

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection()

// CORS
app.use(cors())


// Directorio Publico
// EL USE EN EXPRESS ES CONOCIDO COMO UN MIDDLEWARE
// Aqui expresamos la pagina que se usara como middleware en este caso especificamos la carpeta donde realizaremos esa peticion
app.use( express.static('public'));


// Lectura y parseo del body
app.use( express.json() );


// Rutas
// Especificamos la ruta donde estara habilitado el endpoint que vamos a crear
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar Peticiones
// Especificamos el puerto donde estara corriendo y tambien especificamos el callback que se realizara
// El puerto lo especificamos con variables de entorno  
app.listen( process.env.PORT, () => {
    console.log( `Servidor corriendo en puerto ${ process.env.PORT }` )
});