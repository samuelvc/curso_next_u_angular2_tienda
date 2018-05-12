import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import {APP_ROUTING} from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { Catalogo_DetalleComponent } from './catalogo/catalogo_detalle.component';
import { CarritoComponent } from './catalogo/carrito.component';

//servicios
import {ProductosService} from './services/productos.service';
import {CarritoService} from './services/carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogoComponent,
    Catalogo_DetalleComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService, CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
