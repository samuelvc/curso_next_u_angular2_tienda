import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';

import { CarritoService, Carrito} from '../services/carrito.service';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CarritoComponent implements OnInit {    

  carrito: Carrito[] = [];

  itemCountBool:boolean = false;   
  itemCountInt:number = 0;
  noproductos:boolean=false;
  total:number=0;

  constructor( private _carritoService: CarritoService, 
              private router: Router) {}

  ngOnInit() {
    this.itemCountBool = false;
    this.carrito = this._carritoService.getCarrito();
    
    if(this.carrito.length > 0){
      this.itemCountInt = this.carrito.length;
      this.itemCountBool = true;

      for(let c of this.carrito)
      {
        this.total = this.total + c.subtotal;
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  salir(){
    this.router.navigate(['/login']);
  }

  regresar(){
    this.router.navigate(['/catalogo']);
  }

  pagar(){
    this._carritoService.resetCarrito();
    this.router.navigate(['/catalogo']);
  }

}
