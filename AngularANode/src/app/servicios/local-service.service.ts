import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  listaProductos: Producto[] =[];
  listaFav: string[] =[];
  
  constructor() { 
    let lista = []
    let listaStorage = localStorage.getItem('listaFav');
    lista = []
    if (listaStorage !== null) {
      lista = JSON.parse(listaStorage);
      this.listaFav = lista;
    }
    
  } 


  annadirFav(_id: string){
    if(!this.listaFav.find(p => p == _id) ){
      this.listaFav.unshift(_id)
      localStorage.setItem('listaFav', JSON.stringify(this.listaFav))
    }else(console.log('El producto ya esta en favoritos'))
  }

  obtenerFavoritos(){
    return this.listaFav
  }

  eliminarFav(_id: string){
    const index = this.listaFav.findIndex(product => product== _id);
    this.listaFav.splice(index, 1);
    localStorage.setItem('listaFav', JSON.stringify(this.listaFav))
  }

 
}
