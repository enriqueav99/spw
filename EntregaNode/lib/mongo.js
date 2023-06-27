const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config/index')

const USER = config.DB_USER
const PASSWORD = config.DB_PASSWORD
const DB_NAME_REMOTO = config.DB_NAME_REMOTO
const DB_HOST_REMOTO = config.DB_HOST_REMOTO

//const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST_REMOTO}/${DB_NAME_REMOTO}?retryWrites=true&w=majority`
//const MONGO_URI = 'mongodb+srv://system:manager@cluster0.cwqpgpf.mongodb.net/?retryWrites=true&w=majority'
MONGO_URI = config.MONGODB_CONNECTION_STRING
class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        this.dbName = 'tfg';
    }

    connect() {
        if (!MongoLib.connection){
            MongoLib.connection = new Promise ((resolve, reject) => {
                this.client.connect( err => {
                    if (err) {
                        reject("error en la conexión con la BBDD ", err);
                    }
                    console.log('Conectado a la BBDD');
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }

    getProductos(collection, query){
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    getProducto(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) })
        })
    }

    anadirProducto(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data.producto)
        }).then(result => result.insertedId);
    }

    borrarProducto(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id) })

        }).then(() => id)
    }

    actualizarProducto(collection, data, id) {
        
        console.log(`producto actualizado ${data.nombre}`)
        return this.connect().then(db => {
            // return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data}, { upsert: true }) //permite completar cualquier campo
            return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: {'nombre': data.nombre, 'proveedor': data.proveedor, 'stock': data.stock }}, { upsert: true })  // solo deja cambiar completada

        }).then(result => result.insertedId || id);
      }
}

module.exports = MongoLib;