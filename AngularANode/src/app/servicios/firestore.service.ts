import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private coleccion = '/productos'
  
  listaProductos: Producto[] = [];
  
  constructor( private http: HttpClient) { 
    
  }

  addProducto(producto: any, ip:string){
    const url = `http://${ip}:8181/productos`;
    return this.http.post(url, producto);  
  }

  obtenerProductos(ip:string){
    return this.http.get(`http://${ip}:8181/productos`)
  }

  
  borrarProducto(id:string, ip:string){
    const url = `http://${ip}:8181/productos/${id}`;
    return this.http.delete(url);
  }
  actualizarProducto(productoActualizado: any, id:any, ip:string) {
    const url = `http://${ip}:8181/productos/${id}`;
    console.log(url)
    return this.http.put(url, productoActualizado);
  }

  obtenerProductoPorId(id: string, ip:string) {
    const url = `http://${ip}:8181/productos/${id}`;
    return this.http.get(url);
    
  }


}
