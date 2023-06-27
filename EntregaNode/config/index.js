// Es mejor colocar todos los valores de configuración en un fichero
// Posteriormente importaremos este fichero allí donde sea necesario

require('dotenv').config();

const config = {
     // port: process.env.PORT | 8080, // los servidores en la nube decidirán el puerto
     // DB_USER : process.env.DB_USER,
     // DB_PASSWORD : process.env.DB_PASSWORD,
     // DB_NAME_REMOTO : process.env.DB_NAME_REMOTO,
     // DB_HOST_REMOTO : process.env.DB_HOST_REMOTO

     port: process.env.PORT | 8080, // los servidores en la nube decidirán el puerto
     DB_USER : '***',
     DB_PASSWORD : '***',
     DB_NAME_REMOTO : '***',
     DB_HOST_REMOTO : '***',
     MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING

}

module.exports = {config}

