const MongoLib = require('../lib/mongo');
class TareasService {

    constructor(){
        this.collection = 'Producto';
        this.mongoDB = new MongoLib();
    }

    async getProductos({tags}) {
        const query = tags ;
        const tareas = await this.mongoDB.getProductos(this.collection, query);
        return tareas || [];
    }
    async getProducto(productoId){
        const tarea = await this.mongoDB.getProducto(this.collection, productoId);
        return tarea || [];
    }

    async crearProducto({producto}){
        const tareaCreadaId = await this.mongoDB.anadirProducto(this.collection, producto);

        return tareaCreadaId || [];
    }

    async borrarProducto( productoId ){
        const productoBorradoId = await this.mongoDB.borrarProducto(this.collection, productoId);
        console.log(`producto borrado ${productoBorradoId}`)
        return productoBorradoId || [];
    }
    
    async actualizarProducto({producto},id){
        console.log(`producto act ${producto.proveedor}`)

        const productoActualizadoId = await this.mongoDB.actualizarProducto(this.collection, producto, id)
        return productoActualizadoId || [];
    }
    
}

module.exports = TareasService