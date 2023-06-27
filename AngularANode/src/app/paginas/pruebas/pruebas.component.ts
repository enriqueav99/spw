import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent  implements OnInit{
  nombre:string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get('nombre') ?? '';
    
  }

}
