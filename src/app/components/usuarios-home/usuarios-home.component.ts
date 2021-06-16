import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-home',
  templateUrl: './usuarios-home.component.html',
  styleUrls: ['./usuarios-home.component.css']
})
export class UsuariosHomeComponent implements OnInit {
  rol:string="";
  usuario:string="";
  constructor() { }

  ngOnInit(): void {
    this.rol = localStorage.rol;
    this.usuario = localStorage.usuario;
  }

}
