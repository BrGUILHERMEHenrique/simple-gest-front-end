import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import api from 'src/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @Input() email: String = '';
  @Input() senha: String = '';

  constructor(
    private router: Router,
    private toastService: ToastService
    ) { }

  async fazerLogin(): Promise<void> {
    if(this.email === '' || this.senha === ''){
      this.toastService.warn('Preencha todos os campos por favor!');
      return;
    }
    const modelo = {
      email: this.email,
      senha: this.senha
    }
    try {
      let response = await api.post('usuarios/login', modelo);

      window.localStorage.setItem('email', JSON.stringify(atob(response.data.split('.')[1])));
      window.localStorage.setItem('94a08da1fecbb6e8b46990538c7b50b2', JSON.stringify(response.data));
      this.router.navigate(['']);
    } catch (error) {
      this.toastService.error('Usuário/senha incorretos');
    }
  };

  async carregarDadosUsuario(): Promise<void> {
    try {
      let response = await api.post(`/usuarios/usuario/${JSON.parse(localStorage.getItem('email') || '').sub}`);
      localStorage.setItem('usuario', JSON.stringify(response.data));
    } catch (error) {
      this.toastService.error('não foi possível carregar os dados do usuário');
    }
  };
  ngOnInit(): void {
  }

}
