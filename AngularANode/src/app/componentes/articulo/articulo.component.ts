import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { LocalServiceService } from 'src/app/servicios/local-service.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit{
  @Input() producto: Producto
  @Output() annadirFavo = new EventEmitter()
  @Output() eliminarProduc = new EventEmitter()
  @Output() actualizarProduc = new EventEmitter()
  isFavorito:boolean=false
  ip:any
  constructor(private service:FirestoreService, private route: ActivatedRoute,private productosService : LocalServiceService, private router: Router){
  }
  ngOnInit(){
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';
    this.productosService.obtenerFavoritos().forEach((productoIterado:any )=> {
      if(productoIterado === this.producto._id){
        this.isFavorito= true
      }
    });
  }
  
  annadirFav(_id:string){
    this.isFavorito=true
    this.annadirFavo.emit(_id)
  }

  borrar(_producto: Producto){
    this.eliminarProduc.emit(_producto)
  }

  actualizar(_id:string){
    this.router.navigate(['/actualizar',_id, this.ip]);

  }
}
