import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { LocalServiceService } from 'src/app/servicios/local-service.service';
@Component({
  selector: 'app-actualizar-prod',
  templateUrl: './actualizar-prod.component.html',
  styleUrls: ['./actualizar-prod.component.css']
})
export class ActualizarProdComponent implements OnInit{
  ip:any
  id:string
  producto: Producto 

  constructor(private firebaseService: FirestoreService ,private route: ActivatedRoute, private productosService : LocalServiceService, private router: Router){
    
  }
  

  ngOnInit(): void {
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.obtenerProducto(this.id)   
  }
  obtenerProducto(id: string): void {
    this.firebaseService.obtenerProductoPorId(id, this.ip).subscribe((producto:any) => {
      console.log(producto)
      this.producto = producto.data
    })
  }
  


  actualizarProducto(nombre:HTMLInputElement, proveedor:HTMLInputElement, stock:HTMLInputElement){
    this.obtenerProducto(this.id)    
    if(nombre.value.length>0){
      this.producto.nombre = nombre.value
    }
    if(proveedor.value.length>0){
      this.producto.proveedor = proveedor.value
    }
    if(stock.value.length>0){
      this.producto.stock = Number(stock.value)
    }


    const actProducto = {
      producto: {
        nombre: this.producto.nombre,
        stock: this.producto.stock,
        proveedor: this.producto.proveedor
      }
    };


    this.firebaseService.actualizarProducto(actProducto, this.id, this.ip).subscribe(
      response => {
        console.log('Producto actualizado:', response);
      },
      error => {
        console.error('Error al actualizar el producto:', error);
      }
    )
    this.router.navigate(['/principal', this.ip]);
  }
}
