import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { ListadoArticulosComponent } from './componentes/listado-articulos/listado-articulos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { ListaFavoritosComponent } from './paginas/lista-favoritos/lista-favoritos.component';
import { ArticuloFavComponent } from './componentes/articulo-fav/articulo-fav.component';
import { PruebasComponent } from './paginas/pruebas/pruebas.component';
import { ActualizarProdComponent } from './paginas/actualizar-prod/actualizar-prod.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrimeraComponent } from './paginas/primera/primera.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    ListadoArticulosComponent,
    FormularioComponent,
    ArticuloComponent,
    NotFoundComponent,
    MenuPrincipalComponent,
    ListaFavoritosComponent,
    ArticuloFavComponent,
    PruebasComponent,
    ActualizarProdComponent,
    FooterComponent,
    PrimeraComponent,
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
