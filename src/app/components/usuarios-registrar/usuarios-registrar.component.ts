import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent implements OnInit {

  registroOk:boolean=false;
  registroEnv:boolean=false;
  mensaje:string="";
  user={  nombre:"", email:"", password:"",repassword:""};

  constructor(private usuariosService: UsuariosService,private router:Router) {
   }

  ngOnInit(): void {

  }

  registrar(){
    this.registroEnv=true;
		console.log("Sign Up");
    this.usuariosService.registrar(this.user).subscribe(
      res => {
        let result:any=res;
        this.mensaje=result.message;
        console.log(result.message);
        this.registroOk=true;
      },
      err => {
        console.log(err.error.message);
        this.mensaje=err.error.message;
        this.registroOk=false;
      }
    )

	}
    reintentarReg(){
    this.mensaje="";
    this.registroEnv=false;
    this.user={  nombre:"", email:"", password:"",repassword:""};
    this.router.navigate(['usuarios/registrar']);

    }

    iniciarSesion(){
    this.mensaje="";
    this.registroEnv=false;
    this.router.navigate(['usuarios/ingresar']);
    }

}
