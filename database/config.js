// AQUI REALIZAREMOS LA  CONFIGURACION DE LA BASE DE DATOS
const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        // Realizaremos la configuracion para realizar la configuracion hacia la base de datos
        // await mongoose.connect(process.env.DB_CNN, {

        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // } );

        await mongoose.connect(process.env.DB_CNN)

        console.log('DB Online')
        
    } catch (error) {

        console.log(error);
        throw new Error('Error a la hora de inicializar DB')
        
    }
}

module.exports = {
    dbConnection 
}

