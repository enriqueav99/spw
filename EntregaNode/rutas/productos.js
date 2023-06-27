const express = require('express');

const ProductosService = require('../servicios/productosService');

function tareasAPI(app) {
    const router = express.Router();
    // app.use(express.static('dist/todo'));
    const cors = require('cors');
    app.use(cors());
    


      
    app.use('/productos', router);
    
      
    const productosService = new ProductosService();
    router.get('/prueba', async function(req, res, next){

        try{
            
            res.status(200).json({
                data: "asdfasdf",
                message: 'listado de productos devuelto'
            })
        }catch(err){
            next(err)
        }
    })
    router.get('/', async function(req, res, next){
        const tags = req.query;

        try{
            const productos = await productosService.getProductos({tags})
            res.status(200).json({
                data: productos,
                message: 'listado de productos devuelto'
            })
        }catch(err){
            next(err)
        }
    })

    router.get('/:productoId', async function (req, res, next) {
        const {productoId}  = req.params;  // const tareaId = req.params.tareaId;
        try {
            const producto = await productosService.getProducto(productoId);
            res.status(200).json({
                data: producto,
                message: 'producto devuelto con éxito'
            });
        } catch (err) {
            next(err);
        }

    })
    
    router.post('/', async function (req, res, next) {
        const { body: producto } = req; // body = req.body; tarea = body  / los : definen un alias
        try {
            const nuevoProducto = await productosService.crearProducto({producto});
            console.log(nuevoProducto)
            res.status(201).json({
                data: nuevoProducto,
                message: 'producto devuelto con éxito'
            });
        } catch (err) {
            next(err);
        }
    })

    router.put('/:id', async function (req, res, next) {
        const {id}  = req.params;
        const producto = req.body; // body = req.body; tarea = body  / los : definen un alias
        try {
            const productoActualizado = await productosService.actualizarProducto(producto, id)

            res.status(201).json({
                data: productoActualizado,
                message: 'producto actualizado con éxito'
            });
        } catch (err) {
            next(err);
        }
    })


    router.delete('/:productoId', async function (req, res, next) {
        const  {productoId}  = req.params;

        try {
            const productoBorrado = await productosService.borrarProducto(productoId);

            res.status(200).json({
                data: productoBorrado,
                message: 'producto borrado con éxito'
            });
        } catch (err) {
            next(err);
        }

    })

}

module.exports = tareasAPI;