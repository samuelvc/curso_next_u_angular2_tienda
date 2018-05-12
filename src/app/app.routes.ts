import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import { Catalogo_DetalleComponent } from './catalogo/catalogo_detalle.component';
import { CarritoComponent } from './catalogo/carrito.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo/:id', component: Catalogo_DetalleComponent },
  { path: 'carrito', component: CarritoComponent },

  //{ path: 'pipes', component: PipesComponent },
  //{ path: 'heroe/:id', component: HeroeComponent },
  //{ path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});