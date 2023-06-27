import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
@Component({
  selector: 'app-articulo-fav',
  templateUrl: './articulo-fav.component.html',
  styleUrls: ['./articulo-fav.component.css']
})
export class ArticuloFavComponent {
  @Input() producto: Producto
  @Output() eliminarFavo = new EventEmitter()

  eliminarFav(_id:string){
    this.eliminarFavo.emit(_id)
  }
}
