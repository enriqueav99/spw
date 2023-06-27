import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { ListaFavoritosComponent } from './paginas/lista-favoritos/lista-favoritos.component';
import { PruebasComponent } from './paginas/pruebas/pruebas.component';
import { ActualizarProdComponent } from './paginas/actualizar-prod/actualizar-prod.component';
import { PrimeraComponent } from './paginas/primera/primera.component';
import { ListadoArticulosComponent } from './componentes/listado-articulos/listado-articulos.component';

const routes: Routes = [
  {path: '', component: PrimeraComponent},
  {path: 'principal/:ip', component: ListadoArticulosComponent},
  {path: 'favoritos/:ip', component: ListaFavoritosComponent},
  {path:'actualizar/:id/:ip', component: ActualizarProdComponent},
  {path:'pruebas/:nombre/:ip', component: PruebasComponent},
  {path: '404', component:NotFoundComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
