import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { LocalServiceService } from 'src/app/servicios/local-service.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit{
    listadoProductos :Producto[]=[];
    isProductosVacio  =true
    productos: any[]
    ip:any
    constructor(private route: ActivatedRoute, private productosService : LocalServiceService, private firebaseService: FirestoreService){
      
    }

  ngOnInit(): void {
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';
    this.obtenerProductos()
    this.comprobarColeccionVacia()
  }
  productoAnnadido(producto:Producto){
    this.listadoProductos.push(producto)
  }

    obtenerProductos(){
      const observable = this.firebaseService.obtenerProductos(this.ip).subscribe( (productos:any) => {
          productos.data.forEach((producto:any) => {
            var productoNuevo = new Producto(producto._id, producto.nombre, producto.stock, producto.proveedor)
            this.listadoProductos.push(productoNuevo)
          });
      } )
    }

       

    annadirFav(_id:string){
      this.productosService.annadirFav(_id)
    }
    


    borrarProduc(producto: Producto){
    
      this.firebaseService.borrarProducto(producto._id, this.ip).subscribe((respuesta) => {
        
        this.listadoProductos = this.listadoProductos.filter((productoFiltro) => productoFiltro._id !== producto._id);
        this.productosService.eliminarFav(producto._id)
        console.log('Producto borrado con éxito', respuesta);
      },
      (error) => {
        console.error('Error al borrar el producto', error);
      })    

    }
   
    comprobarColeccionVacia() {

      const observable = this.firebaseService.obtenerProductos(this.ip).subscribe( (productos:any) => {
        if (productos.data.length == 0) {
          this.isProductosVacio= false
        } else {
          this.isProductosVacio= true
        }
      } )

    }
}
