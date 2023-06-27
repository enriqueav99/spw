import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { LocalServiceService } from 'src/app/servicios/local-service.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() annadirProduc = new EventEmitter()
  constructor(private service: LocalServiceService, private firestoreService: FirestoreService, private route: ActivatedRoute ){

  }
ip:any
  ngOnInit(): void {
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';
  
  }
  annadirProducto(nombre:HTMLInputElement, proveedor:HTMLInputElement, stock:HTMLInputElement){

    const nuevoProducto = {
      producto: {
        nombre: nombre.value,
        stock: Number(stock.value),
        proveedor: proveedor.value
      }
    };

    this.firestoreService.addProducto(nuevoProducto, this.ip).subscribe((respuesta:any) => {
      console.log('Producto creado con éxito', respuesta);
      console.log(respuesta.data)
      this.annadirProduc.emit(new Producto(respuesta.data, nombre.value, Number(stock.value), proveedor.value ))
    },
    (error) => {
      console.error('Error al crear el producto', error);
    })
  }
}
