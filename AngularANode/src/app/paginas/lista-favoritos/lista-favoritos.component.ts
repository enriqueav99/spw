import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { LocalServiceService } from 'src/app/servicios/local-service.service';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent implements OnInit{
  listadoProductos :Producto[]=[];
  listadoId:string[]=[]
  constructor(private route: ActivatedRoute, private firebaseService:FirestoreService, private productosService : LocalServiceService){
    
  }
  ip:any
  ngOnInit(): void {
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';

    this.listadoId = this.productosService.obtenerFavoritos();
    this.listadoId.forEach(id => {
      this.obtenerProducto(id)
    });
  }
  obtenerProducto(id: string): void {
    this.firebaseService.obtenerProductoPorId(id, this.ip).subscribe((producto:any) => {
      producto = producto.data
      var productoNuevo = new Producto(producto._id, producto.nombre, producto.stock, producto.proovedor)
      console.log(productoNuevo)
      this.listadoProductos.push(productoNuevo)
  } )
    
  }
  eliminarFav(_id:string){
    const index = this.listadoProductos.findIndex(p => p._id === _id);
    if (index !== -1) {
      this.listadoProductos.splice(index, 1)
    }
    this.productosService.eliminarFav(_id)
  }
}
