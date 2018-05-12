import { Component, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  isMostrar = false;
  
  title = "titulo de muestra";
  
  //@Label()
  //prop: number;
  
  ngOnChanges(){
	  console.log("algo cambio");
  }
}