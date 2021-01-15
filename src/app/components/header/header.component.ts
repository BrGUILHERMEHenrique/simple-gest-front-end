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
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '');

  nome: String = this.usuario.nome;

  logout(): void {
    window.localStorage.removeItem('usuario');
    this.router.navigate(['login']);
  }
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
