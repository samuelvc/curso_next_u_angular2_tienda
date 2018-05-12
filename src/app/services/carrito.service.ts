import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class CarritoService 
{
	carrito:Carrito[] = [];

  constructor() {
      //console.log('Servicio de carrito listo para usarse');
  }

  addCarrito(id:number, producto:string, imagen:string, precio:number, cantidad:number)
  {
    precio = precio * cantidad;
    let cont = 0;
    let posicion = 0;
    let existe:Boolean = false
    for(let shop of this.carrito)
    {
      let idproducto = shop.id;
      if(id == idproducto)
      {
          posicion = cont;
          existe = true;
      }
      cont++;
    }

    if(existe == true){
      this.carrito[posicion].subtotal = this.carrito[posicion].subtotal + precio;
      this.carrito[posicion].unidades = this.carrito[posicion].unidades + cantidad;
    }else{
      var c = new Carrito(id, producto, precio, cantidad, imagen);      
      this.carrito.push(c);
    }
  }

  getCarrito(){
    return this.carrito;
  }

  resetCarrito(){
    this.carrito = [];
  }

  getProductoTotal()
  {
    return this.carrito.length;
  }
  
}

export class Carrito{
  constructor(
    public id: number,
    public producto: string,
    public subtotal: number,
    public unidades: number,
    public imagen: string
  ){}
};
