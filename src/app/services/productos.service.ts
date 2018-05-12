import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class ProductosService 
{
	productos:Producto[] = [
	  {
	  	  'id':1,
		  'producto':'Aguacate',
		  'precio':1.50,
		  'unidades_disponibles': 10,
		  'imagen':'assets/aguacate.jpg'
	  },
	  {
	  	  'id':2,
		  'producto':'Ajo',
		  'precio':0.50,
		  'unidades_disponibles': 8,
		  'imagen':'assets/ajo.jpg'
	  },
	  {
	  	   'id':3,
		  'producto':'Almendra',
		  'precio':1.10,
		  'unidades_disponibles': 15,
		  'imagen':'assets/almendras.jpg'
	  },
	  {
	      'id':4,
		  'producto':'Arandanos',
		  'precio':2.10,
		  'unidades_disponibles': 5,
		  'imagen':'assets/arandanos.jpg'
	  },
	  {
	      'id':5,
		  'producto':'Brocoli',
		  'precio':2.10,
		  'unidades_disponibles': 13,
		  'imagen':'assets/brocoli.jpg'
	  },
	  {
	      'id':6,
		  'producto':'Calabaza',
		  'precio':0.10,
		  'unidades_disponibles': 10,
		  'imagen':'assets/calabaza.jpg'
	  },
	  {
	      'id':7,
		  'producto':'Canela',
		  'precio':0.30,
		  'unidades_disponibles': 20,
		  'imagen':'assets/canela.jpg'
	  },
	  {
	      'id':8,
		  'producto':'Cebolla',
		  'precio':0.75,
		  'unidades_disponibles': 11,
		  'imagen':'assets/cebolla.jpg'
	  },
	  {
	      'id':9,
		  'producto':'Fresa',
		  'precio':1.40,
		  'unidades_disponibles': 7,
		  'imagen':'assets/fresa.jpg'
	  },
	  {
	      'id':10,
		  'producto':'Kiwi',
		  'precio':3.10,
		  'unidades_disponibles': 6,
		  'imagen':'assets/kiwi.jpg'
	  },
	  {
	      'id':11,
		  'producto':'Limon',
		  'precio':0.10,
		  'unidades_disponibles': 4,
		  'imagen':'assets/limon.jpg'
	  },
	  {
	      'id':12,
		  'producto':'Lychee',
		  'precio':1.60,
		  'unidades_disponibles': 6,
		  'imagen':'assets/lychee.jpg'
	  },
	  {
	      'id':13,
		  'producto':'Maiz',
		  'precio':0.10,
		  'unidades_disponibles': 9,
		  'imagen':'assets/maiz.jpg'
	  },
	  {
	      'id':14,
		  'producto':'Manzana',
		  'precio':3.70,
		  'unidades_disponibles': 5,
		  'imagen':'assets/manzana.jpg'
	  },
	  {
	      'id':15,
		  'producto':'Naranja',
		  'precio':1.10,
		  'unidades_disponibles': 15,
		  'imagen':'assets/naranja.jpg'
	  },
	  {
	      'id':16,
		  'producto':'Papa',
		  'precio':0.80,
		  'unidades_disponibles': 13,
		  'imagen':'assets/papa.jpg'
	  },
	  {
	      'id':17,
		  'producto':'Pasta',
		  'precio':2.10,
		  'unidades_disponibles': 15,
		  'imagen':'assets/pasta.jpg'
	  },
	  {
	      'id':18,
		  'producto':'Pimienta',
		  'precio':0.10,
		  'unidades_disponibles': 10,
		  'imagen':'assets/pimienta.jpg'
	  },
	  {
	      'id':19,
		  'producto':'Repollo',
		  'precio':5.10,
		  'unidades_disponibles': 10,
		  'imagen':'assets/repollo.jpg'
	  },
	  {
	      'id':20,
		  'producto':'Tomate',
		  'precio':2.10,
		  'unidades_disponibles': 15,
		  'imagen':'assets/tomate.jpg'
	  },
	  {
	      'id':21,
		  'producto':'Zanahoria',
		  'precio':4.10,
		  'unidades_disponibles': 15,
		  'imagen':'assets/zanahoria.jpg'
	  }
  ];

  constructor() {
      //console.log('Servicio de producto listo para usarse');
  }

  getProducto(idx:number){
    for(let producto of this.productos)
    {
      if(producto.id == idx)
      {
        return producto;
      }
    }
  }

  getProductos(){
  	return this.productos;
  }

  buscarProductos(searchValue:string):Producto[]
  {
    let productosArr:Producto[] = [];
    searchValue = searchValue.toLowerCase();
    for(let producto of this.productos)
    {
      let nombre = producto.producto.toLowerCase();
      if(nombre.indexOf(searchValue) >= 0)
      {
        productosArr.push(producto);
      }
    }
    return productosArr;
  }

  updateStockProducto(idx:number, cantidad:number){
  	let index = 0;
  	for(let producto of this.productos)
  	{
  		let id = producto.id;
  		if(idx == id)
	    {
	        this.productos[index].unidades_disponibles = this.productos[index].unidades_disponibles - cantidad;
	        return;
	    }
	    index++;
  	}
  }
}

export interface Producto{
  id:number;
  producto: string;
  precio: number;
  unidades_disponibles: number;
  imagen: string;
};
