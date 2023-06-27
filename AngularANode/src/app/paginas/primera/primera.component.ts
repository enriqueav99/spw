import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent {
  constructor( private route: ActivatedRoute ,private router: Router) {}

  redireccion(ip:HTMLInputElement){

    this.router.navigate(['/principal', ip.value]);
  }
}
