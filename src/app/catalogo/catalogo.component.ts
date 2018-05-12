import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';

import { ProductosService, Producto} from '../services/productos.service';
import { CarritoService, Carrito} from '../services/carrito.service';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

	productos: Producto[] = [];
  carrito: Carrito[] = [];

  itemCountBool:boolean = false;   
  itemCountInt:number = 0;
  noproductos:boolean=false;
  
  //valor:number=0;

  constructor(
              private _productosService: ProductosService, 
              private _carritoService: CarritoService, 
              private router: Router) {
  }

  ngOnInit() {
  	this.productos = this._productosService.getProductos();
    this.noproductos = false;
    if(this.productos.length == 0){
      this.noproductos = true;
    }

    this.itemCountBool = false;
    this.carrito = this._carritoService.getCarrito();
    if(this.carrito.length > 0){
      this.itemCountInt = this.carrito.length;
      this.itemCountBool = true;
    }
  }

  verProducto(idx:number){
    this.router.navigate(['/catalogo', idx]);
  }

  addCarrito(prd: Producto, cantidad:number){
     this._carritoService.addCarrito(prd.id, prd.producto, prd.imagen, prd.precio, cantidad);
     this._productosService.updateStockProducto(prd.id, cantidad);
     this.itemCountInt = this._carritoService.getProductoTotal();
     this.itemCountBool = true;
  }

  verCarrito(){
    if(this.itemCountBool == true){
      this.router.navigate(['/carrito']);
    }
  }

  buscarProductos(searchValue : string){
  	this.productos = this._productosService.buscarProductos(searchValue);
    this.noproductos = false;
    if(this.productos.length  == 0){
      this.noproductos = true;
    }
  }

  validar(value:number, idproducto:number)
  {
    /*if(value <= disponible){
      this.valor = value;
    }*/
  }

  salir(){
    this.router.navigate(['/login']);
  }

}
