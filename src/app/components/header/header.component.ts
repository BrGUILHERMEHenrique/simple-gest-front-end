import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/Usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario: Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '{}');

  handlePosition(): void {
    setTimeout((res) => {
      console.log(window.location.href);
      switch (window.location.href) {
        case 'http://localhost:4200/despesas':
          document.querySelector('.despesas')?.classList.add('ativo')
          document.querySelector('.investimentos')?.classList.remove('ativo')
          document.querySelector('.cotacao')?.classList.remove('ativo')
          break;
        case 'http://localhost:4200/investimentos':
          document.querySelector('.despesas')?.classList.remove('ativo')
          document.querySelector('.investimentos')?.classList.add('ativo')
          document.querySelector('.cotacao')?.classList.remove('ativo')
          break;
        case 'http://localhost:4200/cotacao':
          document.querySelector('.despesas')?.classList.remove('ativo')
          document.querySelector('.investimentos')?.classList.remove('ativo')
          document.querySelector('.cotacao')?.classList.add('ativo')
          break;
        default:
          document.querySelector('.despesas')?.classList.remove('ativo')
          document.querySelector('.investimentos')?.classList.remove('ativo')
          document.querySelector('.cotacao')?.classList.remove('ativo')
          break;
      }
    }, 500)

  }
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

  }

}
