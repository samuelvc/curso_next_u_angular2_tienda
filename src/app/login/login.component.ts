import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  IsValid = true;
  IsValidEmail = true;
  IsValidPassword = true;
  
  usuarios = [
	  {
		  'email':'samuel@samuel.com',
		  'password':'samuel'
	  },
	  {
		  'email':'admin@admin.com',
		  'password':'admin'
	  }
  ]

  constructor(private router: Router) { }  

  ngOnInit() {
  		this.IsValid = true;
		this.IsValidEmail = true;
		this.IsValidPassword = true;
  }

  enviarForm(form){
	  let email = form.value.email;// se obtiene el email del formulario
	  let password = form.value.password;//se obtiene la password del formulario
	  
	  this.IsValidEmail = true;
	  //para validar el correo
	  if(email == ""){
		  this.IsValidEmail = false;
		  return;
	  }
	  
	  this.IsValidPassword = true;
	  //para validar la contraseña
	  if(password == ""){
		  this.IsValidPassword = false;
		  return;   
	  }
	  
	  let valid = false;
	  for (var i in this.usuarios) //se recorre el objeto usuarios json para validar el email/password
	  {
			if(this.usuarios[i].email == email && this.usuarios[i].password == password){
				valid = true;
				//document.getElementById("login").visible = false;
				//document.getElementById("catalogo").visible = true;
				continue;
			}
			//console.log(valid + 'dd');
	  };
	  
	  this.IsValid = true;
	  if(valid==false){
		  this.IsValid = false;
	  }else{
	  	this.router.navigate(['/catalogo']);
	  }
  }
}  
