import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

  ip:any
  constructor(private route: ActivatedRoute){
  }
  ngOnInit(){
    this.ip = this.route.snapshot.paramMap.get('ip') ?? '';
    
  }

}
