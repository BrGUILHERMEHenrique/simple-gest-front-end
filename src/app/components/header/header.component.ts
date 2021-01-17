import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/Usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '{}');

  logout(): void {
    window.localStorage.removeItem('usuario');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('94a08da1fecbb6e8b46990538c7b50b2');
    this.router.navigate(['login']);
  }
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.usuarioSalvo)
  }

}
