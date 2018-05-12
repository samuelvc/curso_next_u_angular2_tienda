import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ProductosService} from '../services/productos.service';
import { CarritoService, Carrito} from '../services/carrito.service';

@Component({
  selector: 'detalle',
  templateUrl: './catalogo_detalle.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class Catalogo_DetalleComponent implements OnInit{
  
  producto: any = {};   
  carrito: Carrito[] = [];

  itemCountBool:boolean = false;   
  itemCountInt:number = 0;  

  constructor(private _productosService: ProductosService,
              private _carritoService: CarritoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) 
  {
    this.activatedRoute.params.subscribe( params => {
      this.producto = this._productosService.getProducto(params['id']);
    })
  }

  ngOnInit() {
    this.itemCountBool = false;
    this.carrito = this._carritoService.getCarrito();
    if(this.carrito.length > 0){
      this.itemCountInt = this.carrito.length;
      this.itemCountBool = true;
    }
  }

  verCarrito(){
    if(this.itemCountBool == true){
      this.router.navigate(['/carrito']);
    }
  }

  regresar(){
  	this.router.navigate(['/catalogo']);
  }

  salir(){
    this.router.navigate(['/login']);
  }

}
